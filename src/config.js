'use strict';

import os from 'os';
import path from 'path';
import commandLineArgs from 'command-line-args';

import {check, checkPathExists, checkPathValid, checkRequired} from './check-utils';
import {toAbsolutePath} from './fs-utils';

const args = commandLineArgs([
    {name: 'program-folder', type: String},
    {name: 'output-file', type: String},
    {name: 'cache-folder', type: String},
    {name: 'workers', type: Number, defaultValue: os.cpus().length},
    {name: 'debug', type: Boolean, defaultValue: false},
]);

const config = {
    srcFolder: import.meta.url,
    programFolder: toAbsolutePath(args['program-folder']),
    outputFile: args['output-file'],
    cacheFolder: args['cache-folder'],
    numberOfWorkers: args['workers'],
    debug: args['debug'],
};

// TODO: Fix caching
// if (config.cacheFolder) {
// config.cacheFolder = toAbsolutePath(config.cacheFolder);
// checkPathValid(config.cacheFolder, `--cache-folder=${config.cacheFolder} isn't a valid path`);
// checkPathExists(config.cacheFolder, `--cache-folder=${config.cacheFolder} path doesn't exist`);
// } else {
config.cacheFolder = null;
// }

checkRequired(config.programFolder, `Missing --program-folder=<path-to-programs-folder> argument`);
checkPathValid(config.programFolder, `--program-folder=${config.programFolder} isn't a valid path`);
checkPathExists(config.programFolder, `--program-folder=${config.programFolder} path doesn't exist`);

if (config.outputFile) {
    config.outputFile = toAbsolutePath(config.outputFile);
    checkPathValid(config.outputFile, `--output-file=${config.outputFile} isn't a valid path`);
    checkPathExists(path.dirname(config.outputFile), `Folder for --output-file=${config.outputFile} doesn't exist`);
}

check(!isNaN(config.numberOfWorkers) && config.numberOfWorkers > 0, `Invalid value (${config.numberOfWorkers}) for --workers`);

export default config;
