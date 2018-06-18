'use strict';

import config from "./config";
import {getProgramHistories} from "./stats-utils";

(async function() {
    console.time('runtime');

    const programHistories = await getProgramHistories(config.programFolder);
    // TODO:

    console.timeEnd('runtime');
}().catch((e) => {
    console.error(e);
}));
