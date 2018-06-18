'use strict';

export const increaseObjectKey = (o, key, by = 1) => o[key] = (o[key] || 0) + by;
