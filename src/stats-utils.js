'use strict';

import path from 'path';
import glob from 'glob-promise/lib/index';
import fs from 'fs';
import fse from 'fs-extra';

import config from './config';
import ProgramHistory from './program-history';
import ProgramVersion from './program-version';

import workerPool, {freeWorkers, initWorkers} from './worker-pool';
import xpath from 'xpath';
import xmldom from 'xmldom';
import {getCodeXmlStringFromFile} from './utils';

const parser = new xmldom.DOMParser();

export async function getProgramHistories(programFolder) {
    let programs = new Map();
    const allStatsRequests = [];
    try {
        initWorkers(config.numberOfWorkers);
        let programFilePaths;
        if (fs.lstatSync(programFolder).isDirectory()) {
            programFilePaths = (await glob(`**/*.{catrobat,xml}`, {cwd: programFolder}))
                .map((partialProgramFile) => path.join(programFolder, partialProgramFile));
        } else {
            programFilePaths = [programFolder];
        }
        for (const programFile of programFilePaths) {
            const programVersion = parseProgramVersion(programFile);
            if (!programs.has(programVersion._id)) {
                programs.set(programVersion._id, new ProgramHistory(programVersion._id));
            }
            programs.get(programVersion._id).addVersion(programVersion);

            let programStatsPromise;
            let cacheFile;
            // TODO: Fix caching
            // if (config.cacheFolder) {
            //     cacheFile = path.join(config.cacheFolder, partialProgramFile.replace(/(.+)\..+/, '$1.json'));
            // }
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

    return [...programs.values()];
}

function parseProgramVersion(file) {
    let id;
    let uploadDate;

    const match = file.match(/.*\/([0-9]+)_([0-9a-f-]+)\.((catrobat)|(xml))/);
    if (match) {
        id = match[2];
        uploadDate = new Date(parseInt(match[1]));
    } else {
        const document = parser.parseFromString(getCodeXmlStringFromFile(file));
        const programUrl = xpath.select(`string(/program/header/url)`, document);
        const match = programUrl.match(/.*\/(([1-9][0-9]*)|([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}))$/);
        if (!match) {
            throw new Error(`Invalid program id parsed from string(${programUrl}), file(${file})`);
        }
        id = match[1];
        uploadDate = new Date(0);
    }
    return new ProgramVersion(id, uploadDate, file);
}

export const screenSizeToKey = (screenSize) => `${screenSize.width}x${screenSize.height}`;
