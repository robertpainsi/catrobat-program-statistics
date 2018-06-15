'use strict';

import {promisify} from "util";
import fs from "fs";
import xmldom from "xmldom";
import xpath from "xpath";

import {increaseObjectKey} from "./utils";

const parser = new xmldom.DOMParser();

const readFile = promisify(fs.readFile);

export default async function getProgramStats(programVersion) {
    const stats = {};

    const xmlString = await readFile(programVersion.file, 'UTF-8');
    const document = parser.parseFromString(xmlString);
    stats.languageVersion = parseFloat(xpath.select(`string(/program/header/catrobatLanguageVersion)`, document));
    if (stats.languageVersion < 0.94) {
        return stats;
    }

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

    for (const brick of [...scripts, ...bricks]) {
        stats.bricks++;
        increaseObjectKey(stats.brickUsage, brick.getAttribute('type'));
    }

    for (const formula of formulas) {
        const type = xpath.select1(`type`, formula).textContent;
        switch (type) {
            case `NUMBER`:
            case `STRING`:
            case `USER_VARIABLE`:
            case `USER_LIST`:
            case `BRACKET`:
            case `COLLISION_FORMULA`:
                increaseObjectKey(stats.formulaUsage, type);
                break;
            default:
                const value = xpath.select1(`value`, formula).textContent;
                if (!type || !value) {
                    throw new Error(`Incomplete formula ${type}: ${value}`);
                }

                stats.formulaUsage[type] = stats.formulaUsage[type] || {};
                increaseObjectKey(stats.formulaUsage[type], value);
                break;
        }
    }

    return stats;
}
