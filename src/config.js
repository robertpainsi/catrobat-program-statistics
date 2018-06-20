'use strict';

import path from "path";
import os from "os";
import commandLineArgs from "command-line-args";

const args = commandLineArgs([
    { name: 'program-folder', type: String },
    { name: 'output-file', type: String },
    { name: 'cache-folder', type: String },
    { name: 'workers', type: Number },
]);

const cwd = process.cwd();
const config = {
    srcFolder: __dirname,
    programFolder: args['program-folder'],
    outputFile: args['output-file'],
    cacheFolder: args['cache-folder'],
    numberOfWorkers: args['workers'],
};

if (config.cacheFolder === undefined) {
    config.cacheFolder = false;
} else if (!path.isAbsolute(config.cacheFolder)) {
    config.cacheFolder = path.join(cwd, config.cacheFolder);
}

if (!path.isAbsolute(config.programFolder)) {
    config.programFolder = path.join(cwd, config.programFolder);
}

if (!path.isAbsolute(config.outputFile)) {
    config.outputFile = path.join(cwd, config.outputFile);
}

if (config.numberOfWorkers === undefined) {
    config.numberOfWorkers = os.cpus().length;
}

if (!config.programFolder) {
    throw new Error(`Missing --program-folder=<path-to-programs-folder> argument`);
}

if (!config.outputFile) {
    throw new Error(`Missing --output-file=<path-to-output-file> argument`);
}

if (isNaN(config.numberOfWorkers) || config.numberOfWorkers <= 0) {
    throw new Error(`Invalid value (${config.numberOfWorkers}) for --workers`);
}

export default config;
