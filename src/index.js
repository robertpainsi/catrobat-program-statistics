'use strict';

import config from './config';

import moment from 'moment';
import fse from 'fs-extra';

import {increaseObjectKey, pushIfDefined} from './utils';
import {getProgramHistories, screenSizeToKey} from './stats-utils';
import statsInfo from './stats-info';
import {log} from './logger';

(async function() {
    log(config);
    const programHistories = (await getProgramHistories(config.programFolder))
        .filter(({versions}) => versions.some(({stats}) => stats.languageVersion >= 0.94));

    if (!programHistories.length) {
        console.log(`No program histories to create overall stats from`);
        return;
    }

    const now = programHistories.reduce((accumulator, programHistory) => {
        if (programHistory.latestVersion.uploadDate > accumulator) {
            return programHistory.latestVersion.uploadDate;
        } else {
            return accumulator;
        }
    }, new Date(0));

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
        pushIfDefined(lastYearLatestVersions, programHistory.getLastVersionsBetween(lastButOneYearDate, lastYearDate, true));
        pushIfDefined(currentMonthLatestVersions, programHistory.getLastVersionsBetween(lastMonthDate, now));
        pushIfDefined(lastMonthLatestVersions, programHistory.getLastVersionsBetween(lastButOneMonthDate, lastMonthDate, true));
    }

    const getMonthlyTimelineKey = (date) => moment(date).format('YYYY-MM');
    const getWeeklyTimelineKey = (date) => moment(date).format('GGGG, [week] WW');
    const getDailyTimelineKey = (date) => moment(date).format('MM-DD');

    const stats = {
        updated: new Date().getTime(),
        overall: getOverallStats(allLatestVersions, {
            type: `overall`,
            hasLastData: false,
            getTimelineKey: getMonthlyTimelineKey,
        }),
        currentYear: getOverallStats(currentYearLatestVersions, {
            type: `year`,
            hasLastData: true,
            getTimelineKey: getWeeklyTimelineKey,
        }),
        lastYear: getOverallStats(lastYearLatestVersions, {
            type: `year`,
            hasLastData: false,
            getTimelineKey: getWeeklyTimelineKey,
        }),
        currentMonth: getOverallStats(currentMonthLatestVersions, {
            type: `month`,
            hasLastData: true,
            getTimelineKey: getDailyTimelineKey,
        }),
        lastMonth: getOverallStats(lastMonthLatestVersions, {
            type: `month`,
            hasLastData: false,
            getTimelineKey: getDailyTimelineKey,
        }),
        display: statsInfo,
    };

    if (config.outputFile) {
        await fse.writeJson(config.outputFile, stats, {spaces: 2});
    } else {
        console.log(JSON.stringify(stats, null, 2));
    }
}().catch((e) => {
    console.error(e);
}));

function getOverallStats(versions, {type, hasLastData, getTimelineKey}) {
    const overall = {
        type,
        hasLastData,
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
        programsUsingBricks: {},
        formulaUsage: {},
        programsUsingFormula: {},
        featureUsage: {},
        objectVariables: 0,
        objectLists: 0,
        programVariables: 0,
        programLists: 0,
        timeline: {},
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
            increaseObjectKey(overall.programsUsingBricks, key);
        }

        for (const [key, value] of Object.entries(stats.formulaUsage)) {
            increaseObjectKey(overall.formulaUsage, key, value);
            increaseObjectKey(overall.programsUsingFormula, key);
        }

        for (const feature of stats.features) {
            increaseObjectKey(overall.featureUsage, feature);
        }

        const timelineKey = getTimelineKey(version.uploadDate);
        overall.timeline[timelineKey] = overall.timeline[timelineKey] || {remixes: 0, new: 0};
        if (stats.isRemix) {
            increaseObjectKey(overall.timeline[timelineKey], 'remixes');
        } else {
            increaseObjectKey(overall.timeline[timelineKey], 'new');
        }
    }

    return overall;
}
