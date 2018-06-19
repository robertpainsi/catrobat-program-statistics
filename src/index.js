'use strict';

import config from "./config";
import {increaseObjectKey, pushIfDefined} from "./utils";
import {getProgramHistories, screenSizeToKey} from "./stats-utils";
import {getDisplayInfo} from "./stats-display-info";

(async function() {
    console.time('runtime');

    const programHistories = (await getProgramHistories(config.programFolder))
        .filter(({versions}) => versions.some(({stats}) => stats.languageVersion >= 0.94));

    const now = new Date();

    const lastYearDate = new Date(now.getTime());
    lastYearDate.setFullYear(now.getFullYear() - 1);
    const lastButOneYearDate = new Date(now.getTime());
    lastButOneYearDate.setFullYear(now.getFullYear() - 2);

    const lastMonthDate = new Date(now.getTime());
    lastMonthDate.setMonth(now.getMonth() - 1);
    const lastButOneMonthDate = new Date(now.getTime());
    lastButOneMonthDate.setMonth(now.getMonth() - 2);

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

    const stats = {
        display: getDisplayInfo(),
        overall: getOverallStats(allLatestVersions),
        currentYear: getOverallStats(currentYearLatestVersions),
        lastYear: getOverallStats(lastYearLatestVersions),
        currentMonth: getOverallStats(currentMonthLatestVersions),
        lastMonth: getOverallStats(lastMonthLatestVersions),
        timeline: {} // TODO
    };

    console.timeEnd('runtime');
}().catch((e) => {
    console.error(e);
}));

function getOverallStats(versions) {
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
            if (Number.isInteger(value)) {
                increaseObjectKey(overall.formulaUsage, key, value);
            } else {
                overall.formulaUsage[key] = overall.formulaUsage[value] || {};
                for (const [k, v] of Object.entries(value)) {
                    increaseObjectKey(overall.formulaUsage[key], k, v);
                }
            }
        }

        for (const feature of stats.features) {
            increaseObjectKey(overall.featureUsage, feature);
        }
    }

    return overall;
}
