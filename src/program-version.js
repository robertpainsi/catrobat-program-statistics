'use strict';

export default class ProgramVersion {

    constructor(id, uploadDate, file) {
        this._id = id;
        this._uploadDate = uploadDate;
        this._file = file;
    }

    get id() {
        return this._id;
    }

    get uploadDate() {
        return this._uploadDate;
    }

    get file() {
        return this._file;
    }

    get stats() {
        return this._stats;
    }

    set stats(newStats) {
        this._stats = newStats;
    }
}
