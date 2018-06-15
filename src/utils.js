'use strict';

import path from "path";
import glob from "glob-promise/lib/index";

import ProgramHistory from "./program-history";
import ProgramVersion from "./program-version";

export async function getProgramHistories(programFolder) {
    let programs = new Map();
    for (const partialProgramFile of await glob(`**/*.xml`, {cwd: programFolder})) {
        const programData = parseProgramVersion(path.join(programFolder, partialProgramFile));
        if (!programs.has(programData._id)) {
            programs.set(programData._id, new ProgramHistory(programData._id));
        }
        programs.get(programData._id).addVersion(programData);
    }
    return [...programs.values()].sort((a, b) => a.id - b.id);
}

function parseProgramVersion(file) {
    const match = file.match(/.*\/([0-9]+)_([0-9]+)\.xml/);
    return new ProgramVersion(
        parseInt(match[2]),
        new Date(parseInt(match[1])),
        file
    );
}

export const increaseObjectKey = (o, key, by = 1) => o[key] = (o[key] || 0) + by;
