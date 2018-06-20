'use strict';

import path from "path";
import glob from "glob-promise/lib/index";
import fse from "fs-extra";

import config from "./config";
import ProgramHistory from "./program-history";
import ProgramVersion from "./program-version";
import WorkerPool from "./worker-pool";

export async function getProgramHistories(programFolder) {
    console.time('program histories');
    const workerPool = new WorkerPool();
    try {
        let programs = new Map();
        const allStatsRequests = [];
        for (const partialProgramFile of (await glob(`**/*.xml`, {cwd: programFolder})).reverse()) {
            const programVersion = parseProgramVersion(path.join(programFolder, partialProgramFile));
            if (!programs.has(programVersion._id)) {
                programs.set(programVersion._id, new ProgramHistory(programVersion._id));
            }
            programs.get(programVersion._id).addVersion(programVersion);

            let programStatsPromise;
            const cacheFile = path.join(config.cacheFolder, partialProgramFile.replace(/(.+)\..+/, '$1.json'));
            if (config.cacheFolder && await fse.pathExists(cacheFile)) {
                programStatsPromise = fse.readJson(cacheFile)
                    .then((stats) => {
                        programVersion.stats = stats;
                    });
            } else {
                programStatsPromise = workerPool.getProgramStatsFromFile(programVersion.file)
                    .then((stats) => {
                        programVersion.stats = stats;
                        return fse.outputJson(cacheFile, programVersion.stats, {spaces: 2});
                    });
            }

            allStatsRequests.push(programStatsPromise);
        }
        await Promise.all(allStatsRequests);

        return [...programs.values()].sort((a, b) => a.id - b.id);
    } finally {
        workerPool.freeThreads();
        console.timeEnd('program histories');
    }
}

function parseProgramVersion(file) {
    const match = file.match(/.*\/([0-9]+)_([0-9]+)\.xml/);
    return new ProgramVersion(
        parseInt(match[2]),
        new Date(parseInt(match[1])),
        file
    );
}

export const screenSizeToKey = (screenSize) => `${screenSize.width}x${screenSize.height}`;
