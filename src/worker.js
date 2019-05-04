'use strict';

import {getProgramStatsFromFile} from './program-stats';

process.on('message', (programFile) => {
    getProgramStatsFromFile(programFile)
        .then((stats) => {
            process.send(stats);
        });
});
