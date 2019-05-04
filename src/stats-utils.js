'use strict';

import path from 'path';
import glob from 'glob-promise/lib/index';
import fse from 'fs-extra';

import config from './config';
import ProgramHistory from './program-history';
import ProgramVersion from './program-version';

import workerPool, {freeWorkers, initWorkers} from './worker-pool';

export async function getProgramHistories(programFolder) {
    let programs = new Map();
    const allStatsRequests = [];
    try {
        initWorkers(config.numberOfWorkers);
        for (const partialProgramFile of (await glob(`**/+([0-9])_+([0-9]).xml`, {cwd: programFolder})).reverse()) {
            const programVersion = parseProgramVersion(path.join(programFolder, partialProgramFile));
            if (!programs.has(programVersion._id)) {
                programs.set(programVersion._id, new ProgramHistory(programVersion._id));
            }
            programs.get(programVersion._id).addVersion(programVersion);

            let programStatsPromise;
            let cacheFile;
            if (config.cacheFolder) {
                cacheFile = path.join(config.cacheFolder, partialProgramFile.replace(/(.+)\..+/, '$1.json'));
            }
            if (cacheFile && await fse.pathExists(cacheFile)) {
                programStatsPromise = fse.readJson(cacheFile)
                    .then((stats) => {
                        programVersion.stats = stats;
                    });
            } else {
                programStatsPromise = workerPool(programVersion.file).then((stats) => {
                    programVersion.stats = stats;
                    if (cacheFile) {
                        return fse.outputJson(cacheFile, programVersion.stats, {spaces: 2});
                    }
                });
            }

            allStatsRequests.push(programStatsPromise);
        }
        if (!allStatsRequests.length) {
            console.log(`No code files found. Check program folder and that code files match [0-9]+_[0-9]+.xml. More info at https://github.com/robertpainsi/catrobat-program-statistics/issues/4`);
        }
        await Promise.all(allStatsRequests);
    } finally {
        freeWorkers();
    }

    return [...programs.values()].sort((a, b) => a.id - b.id);
}

function parseProgramVersion(file) {
    const match = file.match(/.*\/([0-9]+)_([0-9]+)\.xml/);
    return new ProgramVersion(
        parseInt(match[2]),
        new Date(parseInt(match[1])),
        file,
    );
}

export const screenSizeToKey = (screenSize) => `${screenSize.width}x${screenSize.height}`;
