'use strict';

import config from "./config";

import moment from "moment";
import fse from "fs-extra";

import {increaseObjectKey, pushIfDefined} from "./utils";
import {getProgramHistories, screenSizeToKey} from "./stats-utils";
import {getDisplayInfo} from "./stats-display-info";

(async function() {
    console.time('runtime');

    console.time('program histories');
    const programHistories = (await getProgramHistories(config.programFolder))
        .filter(({versions}) => versions.some(({stats}) => stats.languageVersion >= 0.94));
    console.timeEnd('program histories');

    console.time('overall stats');
    const now = new Date();

    const lastYearDate = moment(now).subtract(365, 'days').toDate();
    const lastButOneYearDate = moment(lastYearDate).subtract(365, 'days').toDate();

    const lastMonthDate = moment(now).subtract(30, 'days').toDate();
    const lastButOneMonthDate = moment(lastMonthDate).subtract(30, 'days').toDate();

    const allLatestVersions = [];
    const currentYearLatestVersions = [];
    const lastYearLatestVersions = [];
    const currentMonthLatestVersions = [];
    const lastMonthLatestVersions = [];
    for (const programHistory of programHistories) {
        pushIfDefined(allLatestVersions, programHistory.latestVersion);
        pushIfDefined(currentYearLatestVersions, programHistory.getLastVersionsBetween(lastYearDate, now));
        pushIfDefined(lastYearLatestVersions, programHistory.getLastVersionsBetween(lastButOneYearDate, lastYearDate));
        pushIfDefined(currentMonthLatestVersions, programHistory.getLastVersionsBetween(lastMonthDate, now));
        pushIfDefined(lastMonthLatestVersions, programHistory.getLastVersionsBetween(lastButOneMonthDate, lastMonthDate));
    }

    const getMonthlyTimelineKey = (date) => moment(date).format('YYYY-MM');
    const getWeeklyTimelineKey = (date) => moment(date).format('YYYY, [week] ww');
    const getDailyTimelineKey = (date) => moment(date).format('MM-DD');

    const stats = {
        display: getDisplayInfo(),
        overall: getOverallStats(allLatestVersions, {getTimelineKey: getMonthlyTimelineKey}),
        currentYear: getOverallStats(currentYearLatestVersions, {getTimelineKey: getWeeklyTimelineKey}),
        lastYear: getOverallStats(lastYearLatestVersions, {getTimelineKey: getWeeklyTimelineKey}),
        currentMonth: getOverallStats(currentMonthLatestVersions, {getTimelineKey: getDailyTimelineKey}),
        lastMonth: getOverallStats(lastMonthLatestVersions, {getTimelineKey: getDailyTimelineKey}),
    };
    await fse.outputJson(config.outputFile, stats, {spaces: 2});

    console.timeEnd('overall stats');
    console.timeEnd('runtime');
}().catch((e) => {
    console.error(e);
}));

function getOverallStats(versions, {getTimelineKey}) {
    const overall = {
        programs: 0,
        programsWithMultipleScenes: 0,
        programsWithGroups: 0,
        programsInLandscape: 0,
        languages: {},
        screenSizes: {},
        platforms: {},
        remixes: 0,
        scenes: 0,
        objects: 0,
        groups: 0,
        looks: 0,
        sounds: 0,
        bricks: 0,
        brickUsage: {},
        formulaUsage: {},
        featureUsage: {},
        objectVariables: 0,
        objectLists: 0,
        programVariables: 0,
        programLists: 0,
        timeline: {}
    };

    for (const version of versions) {
        const {stats} = version;

        overall.programs++;
        overall.scenes += stats.scenes;
        if (stats.scenes > 1) overall.programsWithMultipleScenes++;
        overall.groups += stats.groups;
        if (stats.groups > 1) overall.programsWithGroups++;
        if (stats.isLandscape) overall.programsInLandscape++;
        if (stats.isRemix) overall.remixes++;
        overall.objects += stats.objects;
        overall.looks += stats.looks;
        overall.sounds += stats.sounds;
        overall.bricks += stats.bricks;
        overall.objectVariables += stats.objectVariables;
        overall.objectLists += stats.objectLists;
        overall.programVariables += stats.programVariables;
        overall.programLists += stats.programLists;

        increaseObjectKey(overall.languages, stats.languageVersion);
        increaseObjectKey(overall.screenSizes, screenSizeToKey(stats.screenSize));
        increaseObjectKey(overall.platforms, stats.platform);

        for (const [key, value] of Object.entries(stats.brickUsage)) {
            increaseObjectKey(overall.brickUsage, key, value);
        }

        for (const [key, value] of Object.entries(stats.formulaUsage)) {
            increaseObjectKey(overall.formulaUsage, key, value);
        }

        for (const feature of stats.features) {
            increaseObjectKey(overall.featureUsage, feature);
        }

        const timelineKey = getTimelineKey(version.uploadDate);
        overall.timeline[timelineKey] = overall.timeline[timelineKey] || {remixes: 0, new: 0};
        if (stats.isRemix) {
            increaseObjectKey(overall.timeline[timelineKey], 'remixes')
        } else {
            increaseObjectKey(overall.timeline[timelineKey], 'new')
        }
    }

    return overall;
}
