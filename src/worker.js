'use strict';

import {getProgramStatsFromString} from './program-stats';
import {parentPort} from "worker_threads";
import {getCodeXmlStringFromFile} from './utils';

parentPort.on('message', (file) => {
    parentPort.postMessage(getProgramStatsFromString(getCodeXmlStringFromFile(file)));
});
