'use strict';

import path from "path";
import os from "os";

export function toAbsolutePath(filePath) {
    if (!filePath) {
        throw new Error(`toAbsolutePath(${filePath}): Invalid filePath parameter`);
    }

    if (filePath.startsWith(`~`)) {
        filePath = `${os.homedir()}/${filePath.substring(1)}`;
    }

    return path.resolve(filePath);
}
