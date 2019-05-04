'use strict';

import fs from 'fs';
import xmldom from 'xmldom';
import xpath from 'xpath';
import {parentPort, workerData} from 'worker_threads';

import {increaseObjectKey} from './utils';
import statsInfo, {featureGroups} from './stats-info';

const parser = new xmldom.DOMParser();

const renamedBricks = new Map([
    ['LoopEndlessBrick', 'LoopEndBrick'],
    ['ShowVariableBrick', 'ShowTextBrick'],
    ['IfThenLogicBeginBrick', 'IfLogicBeginBrick'],
    ['IfThenLogicEndBrick', 'IfLogicEndBrick'],
    ['WhenBrick', 'WhenScript'],
]);

const renamedFormulas = new Map([
    ['SENSOR_OBJECT_GHOSTEFFECT', 'SENSOR_OBJECT_TRANSPARENCY'],
    ['FUNCTION_POW', 'FUNCTION_POWER'],
]);

const unsupportedBricks = [
    'IfLogicBeginSimpleBrick',
    'IfLogicElseSimpleBrick',
    'IfLogicEndSimpleBrick',
    'VideoBrick',
    'BroadcastReceiverBrick', // XXX: Ignore for now, only in 82911
];

function getProgramStatsFromFile(file) {
    return getProgramStatsFromString(fs.readFileSync(file, 'UTF-8'));
}

function getProgramStatsFromString(xmlString) {
    const stats = {};

    const document = parser.parseFromString(xmlString);
    stats.languageVersion = parseFloat(xpath.select(`string(/program/header/catrobatLanguageVersion)`, document));
    if (stats.languageVersion < 0.94) {
        return stats;
    }

    const user = xpath.select(`string(/program/header/userHandle)`, document);
    const platform = xpath.select(`string(/program/header/platform)`, document);
    const landscape = xpath.select(`string(/program/header/landscapeMode)`, document) === 'true';
    const isRemix = xpath.select(`string(/program/header/remixOf)`, document).trim() !== '';

    let screenWidth = parseInt(xpath.select(`string(/program/header/screenWidth)`, document), 10);
    let screenHeight = parseInt(xpath.select(`string(/program/header/screenHeight)`, document), 10);
    if (screenWidth < screenHeight) {
        [screenWidth, screenHeight] = [screenHeight, screenWidth];
    }

    const scenes = xpath.select(`//scene[not(@reference)]`, document);
    const objects = xpath.select(`//object[not(@reference)]`, document);
    const looks = xpath.select(`//look[not(@reference)]`, document);
    const droneLooks = xpath.select(`//droneLook[not(@reference)]`, document);
    const sounds = xpath.select(`//sound[not(@reference)]`, document);

    const scripts = xpath.select(`//script[not(@reference)]`, document);
    const bricks = xpath.select(`//brick[not(@reference)]`, document);

    const formulas = [].concat(...(
        xpath.select(`//formulaList | //formulaMap`, document)
            .map((u) => xpath.select(`formula[not(@reference)] | formula//leftChild[not(@reference)] | formula//rightChild[not(@reference)]`, u))
    ));

    const objectLists = xpath.select(`//objectListOfList/entry`, document);
    const objectVariables = xpath.select(`//objectVariableList/entry`, document);
    const programLists = xpath.select(`//programListOfLists/userList`, document);
    const programVariables = xpath.select(`//programVariableList/userVariable`, document);

    stats.isLandscape = landscape;
    stats.screenSize = {
        width: screenWidth,
        height: screenHeight,
    };
    stats.user = user;
    stats.platform = platform;
    stats.isRemix = isRemix;
    stats.scenes = scenes.length;
    stats.objects = 0;
    stats.groups = 0;
    stats.looks = looks.length;
    stats.sounds = sounds.length;
    stats.bricks = 0;
    stats.brickUsage = {};
    stats.formulaUsage = {};
    stats.objectVariables = objectVariables.length;
    stats.objectLists = objectLists.length;
    stats.programLists = programLists.length;
    stats.programVariables = programVariables.length;

    for (const object of objects) {
        const objectType = object.getAttribute('type');
        switch (objectType) {
            case 'Sprite':
            case 'SingleSprite':
            case 'GroupItemSprite':
            case '':
                stats.objects++;
                break;
            case 'GroupSprite':
                stats.groups++;
                break;
            default:
                throw new Error(`Unknown object type ${objectType}`);
        }
    }

    const features = [];
    if (droneLooks.length) {
        features.push(...featureGroups.drone);
    }
    for (const brick of [...scripts, ...bricks]) {
        stats.bricks++;
        let type = brick.getAttribute('type');

        if (renamedBricks.has(type)) {
            type = renamedBricks.get(type);
        }
        if (unsupportedBricks.includes(type)) {
            continue;
        }

        increaseObjectKey(stats.brickUsage, type);
        features.push(...getBrickFeatures(type));
    }
    for (const formula of formulas) {
        let type = xpath.select1(`type`, formula).textContent;
        switch (type) {
            case `NUMBER`:
            case `STRING`:
            case `USER_VARIABLE`:
            case `USER_LIST`:
            case `BRACKET`:
            case `COLLISION_FORMULA`:
                increaseObjectKey(stats.formulaUsage, type);
                features.push(...getFormulaFeatures(type));
                break;
            default:
                let value = xpath.select1(`value`, formula).textContent;
                if (!type || !value) {
                    throw new Error(`Incomplete formula ${type}: ${value}`);
                }

                let formulaId = `${type}_${value}`;
                if (renamedFormulas.has(formulaId)) {
                    formulaId = renamedFormulas.get(formulaId);
                }

                increaseObjectKey(stats.formulaUsage, formulaId);
                features.push(...getFormulaFeatures(formulaId));
                break;
        }
    }
    stats.features = [...new Set(features)];

    return stats;
}

function getBrickFeatures(id) {
    if (!statsInfo.bricks[id]) {
        throw new Error(`Unknown brick type ${id}`);
    }
    return [...statsInfo.bricks[id].features];
}

function getFormulaFeatures(id) {
    if (!statsInfo.formulas[id]) {
        throw new Error(`Unknown formula type ${id}`);
    }
    return [...statsInfo.formulas[id].features];
}

parentPort.on('message', (file) => {
    console.log(workerData.id, file);
    parentPort.postMessage(getProgramStatsFromFile(file));
});

