'use strict';

import binarySearchInsert from "binary-search-insert";

export default class ProgramHistory {

    constructor(id) {
        this._id = id;
        this._versions = [];
    }

    addVersion(version) {
        binarySearchInsert(this._versions, (a, b) => a.uploadDate - b.uploadDate, version);
    }

    get id() {
        return this._id;
    }

    get firstVersion() {
        return this._versions[0];
    }

    get latestVersion() {
        return this._versions[this._versions.length - 1];
    }

    get versions() {
        return [...this._versions];
    }

    getVersionsBetween(from, to) {
        return this._versions.filter(({uploadDate}) => uploadDate >= from && (!to || uploadDate <= to));
    }
}
