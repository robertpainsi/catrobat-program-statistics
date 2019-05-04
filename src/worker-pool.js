'use strict';

import {Worker} from "worker_threads";

const allWorkers = new Set();
const availableWorkers = new Set();
const workerCallbacks = new Map();
const workerNotify = [];

export function initWorkers(count) {
    for (let i = 0; i < count; i++) {
        const worker = new Worker('./src/program-stats.js', {
            workerData: {id: i},
        });
        worker.on('message', (stats) => {
            notifyNewFreeWorker(worker);
            workerCallbacks.get(worker).resolve(stats);
        });
        worker.on('error', (e) => {
            notifyNewFreeWorker(worker);
            workerCallbacks.get(worker).reject(e);
        });
        worker.on('exit', (code) => {
            notifyNewFreeWorker(worker);
            if (code !== 0 && workerCallbacks.has(worker)) {
                workerCallbacks.get(worker).reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
        allWorkers.add(worker);
        availableWorkers.add(worker);
    }
}

function notifyNewFreeWorker(worker) {
    availableWorkers.add(worker);
    if (workerNotify.length) {
        workerNotify.pop()(worker);
    }
}

function getFreeWorker() {
    if (availableWorkers.size) {
        const worker = availableWorkers.values().next().value;
        availableWorkers.delete(worker);
        return new Promise((resolve) => {
            resolve(worker);
        });
    } else {
        return new Promise((resolve) => {
            workerNotify.push(resolve);
        });
    }
}

export function freeWorkers() {
    for (const worker of allWorkers) {
        worker.terminate();
    }
}

export default function (file) {
    return new Promise(async (resolve, reject) => {
        const worker = await getFreeWorker();
        availableWorkers.delete(worker);
        workerCallbacks.set(worker, {resolve, reject});
        worker.postMessage(file);
    })
};
