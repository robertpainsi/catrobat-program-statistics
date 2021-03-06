'use strict';

import path from 'path';
import glob from 'glob';
import fs from 'fs';

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
            programFilePaths = glob.sync(`**/*.{catrobat,xml}`, {cwd: programFolder})
                .map((partialProgramFile) => path.resolve(path.join(programFolder, partialProgramFile)));
        } else {
            programFilePaths = [programFolder];
        }
        for (const programFile of programFilePaths) {
            const programVersion = parseProgramVersion(programFile);

            let programStatsPromise;
            programStatsPromise = workerPool(programVersion.file).then((stats) => {
                if (!stats) {
                    return;
                }

                if (!programs.has(programVersion._id)) {
                    programs.set(programVersion._id, new ProgramHistory(programVersion._id));
                }
                programs.get(programVersion._id).addVersion(programVersion);
                programVersion.stats = stats;
            });

            allStatsRequests.push(programStatsPromise);
        }
        if (allStatsRequests.length === 0) {
            console.log(`No code files found in/at ${config.programFolder}`);
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
