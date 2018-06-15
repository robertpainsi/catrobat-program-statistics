'use strict';

import config from "./config";
import {getProgramHistories} from "./utils";
import {createProgramStatsCache} from "./program-stats-cache";
import getAllProgramStats from "./program-stats";

(async function() {
    console.time('runtime');

    const getProgramStats = createProgramStatsCache(getAllProgramStats);
    const programHistories = await getProgramHistories(config.programFolder);
    for (const programHistory of programHistories.reverse()) {
        const {latestVersion} = programHistory;
        console.log(latestVersion.file);
        await getProgramStats(latestVersion);
    }
    console.timeEnd('runtime');
    console.log('END');
}().catch((e) => {
    console.error(e);
}));
