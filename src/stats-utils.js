'use strict';

import path from "path";
import glob from "glob-promise/lib/index";

import ProgramHistory from "./program-history";
import ProgramVersion from "./program-version";
import workerPool from "./worker-pool";

export async function getProgramHistories(programFolder) {
    console.time('program histories');
    let programs = new Map();
    for (const partialProgramFile of await glob(`**/*.xml`, {cwd: programFolder})) {
        const programData = parseProgramVersion(path.join(programFolder, partialProgramFile));
        if (!programs.has(programData._id)) {
            programs.set(programData._id, new ProgramHistory(programData._id));
        }
        programs.get(programData._id).addVersion(programData);
    }
    const programHistories = [...programs.values()].sort((a, b) => a.id - b.id);
    await setProgramStats(programHistories);

    console.timeEnd('program histories');
    return programHistories;
}

function parseProgramVersion(file) {
    const match = file.match(/.*\/([0-9]+)_([0-9]+)\.xml/);
    return new ProgramVersion(
        parseInt(match[2]),
        new Date(parseInt(match[1])),
        file
    );
}

export async function setProgramStats(programHistories) {
    try {
        const allStatsRequests = [];
        for (const programHistory of programHistories.reverse()) {
            for (const programVersion of programHistory.versions) {
                allStatsRequests.push(
                    workerPool.getProgramStatsFromFile(programVersion.file)
                        .then((stats) => {
                            programVersion.stats = stats;
                        })
                );
            }
        }
        await Promise.all(allStatsRequests);
    } catch (e) {
        throw e;
    } finally {
        workerPool.freeThreads();
    }
}
