'use strict';

import fs from "fs-extra";
import isValidPath from "is-valid-path";

export function checkRequired(arg, errorMessage) {
    check(arg !== undefined && arg !== null, errorMessage);
}

export function checkPathValid(p, errorMessage) {
    check(p && isValidPath(p), errorMessage);
}

export function checkPathExists(p, errorMessage) {
    check(fs.pathExistsSync(p), errorMessage);
}

export function check(a, b, c) {
    let result;
    let errorMessage;
    if (typeof a === 'function') {
        result = a();
        errorMessage = b;
    } else if (typeof b === 'function') {
        result = b(a);
        errorMessage = c;
    } else {
        result = a;
        errorMessage = b;
    }

    if (!result) {
        let m;
        if (typeof errorMessage === 'function') {
            m = errorMessage();
        } else {
            m = errorMessage;
        }
        throw new Error(m);
    }
}
