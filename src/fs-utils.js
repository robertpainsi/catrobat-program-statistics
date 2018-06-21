'use strict';

import path from "path";

export function toAbsolutePath(filePath, cwd = process.cwd()) {
    if (!filePath) {
        throw new Error(`toAbsolutePath(${filePath}): Invalid filePath parameter`);
    }
    if (!path.isAbsolute(filePath)) {
        filePath = path.join(cwd, filePath);
    }
    return path.resolve(filePath);
}
