'use strict';

import os from "os";
import path from "path";
import commandLineArgs from "command-line-args";

import {check, checkPathExists, checkPathValid, checkRequired} from "./check-utils";
import {toAbsolutePath} from "./fs-utils";

const args = commandLineArgs([
    {name: 'program-folder', type: String},
    {name: 'output-file', type: String},
    {name: 'cache-folder', type: String},
    {name: 'workers', type: Number},
    {name: 'clear-cache', type: Boolean},
]);

const config = {
    srcFolder: __dirname,
    programFolder: toAbsolutePath(args['program-folder']),
    outputFile: toAbsolutePath(args['output-file']),
    cacheFolder: args['cache-folder'],
    clearCache: args['clear-cache'] || false,
    numberOfWorkers: args['workers'],
};

if (config.cacheFolder) {
    config.cacheFolder = toAbsolutePath(config.cacheFolder);
} else {
    config.cacheFolder = null;
}

checkRequired(config.programFolder, `Missing --program-folder=<path-to-programs-folder> argument`);
checkPathValid(config.programFolder, `--program-folder=${config.programFolder} isn't a valid path`);
checkPathExists(config.programFolder, `--program-folder=${config.programFolder} path doesn't exist`);

checkRequired(config.outputFile, `Missing --output-file=<path-to-output-file> argument`);
checkPathValid(config.outputFile, `--output-file=${config.outputFile} isn't a valid path`);
checkPathExists(path.dirname(config.outputFile), `Folder for --output-file=${config.outputFile} doesn't exist`);

if (config.numberOfWorkers === undefined) {
    config.numberOfWorkers = os.cpus().length;
}
check(!isNaN(config.numberOfWorkers) && config.numberOfWorkers > 0,
    `Invalid value (${config.numberOfWorkers}) for --workers`);

console.log(`config:`, JSON.stringify(config, null, 2));
export default config;
