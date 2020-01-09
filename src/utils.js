'use strict';

import path from 'path';
import fs from 'fs';
import AdmZip from 'adm-zip';

export const increaseObjectKey = (o, key, by = 1) => o[key] = (o[key] || 0) + by;

export const pushIfDefined = (array, value) => {
    if (value !== undefined) {
        array.push(value);
    }
};

export function getExtension(file) {
    const ext = path.extname(file || '').split('.');
    return ext[ext.length - 1];
}

export function getCodeXmlStringFromFile(file) {
    let xmlString;
    switch (getExtension(file)) {
        case 'xml':
            xmlString = fs.readFileSync(file, 'UTF-8');
            break;
        case 'catrobat':
        case 'zip':
            xmlString = new AdmZip(file).getEntries().find(function(zipEntry) {
                return zipEntry.entryName === 'code.xml';
            }).getData().toString('utf8');
            break;
        default:
            throw new Error(`${file} has unknown file extension ${getExtension(file)}`);
    }
    return xmlString;
}
