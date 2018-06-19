'use strict';

export const increaseObjectKey = (o, key, by = 1) => o[key] = (o[key] || 0) + by;

export const pushIfDefined = (array, value) => {
    if (value !== undefined) {
        array.push(value);
    }
};
