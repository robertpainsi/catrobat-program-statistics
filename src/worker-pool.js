'use strict';

import config from "./config";
import {fork} from "child_process";
import {getProgramStatsFromFile} from "./program-stats";

class SingleThreadedPool {

    async getProgramStatsFromFile(file) {
        return getProgramStatsFromFile(file);
    }

    freeThreads() {
    }
}

class MultiThreadedPool {
    notifyWorkers = [];
    availableWorkers = [];

    constructor() {
        for (let i = 0; i < config.cpuCount; i++) {
            const workerExecArgv = process.execArgv.map((arg) => {
                if (arg.indexOf('--inspect') !== -1) {
                    return `--inspect-brk=${process.debugPort + (i + 1)}`
                } else {
                    return arg;
                }
            });
            this.availableWorkers.push(fork('worker.js', {
                execArgv: workerExecArgv
            }));
        }
    }

    async getFreeWorker() {
        return new Promise((resolve, reject) => {
            this.notifyWorkers.push(resolve);
            this.notifyFreeWorker();
        });
    }

    notifyFreeWorker() {
        if (this.notifyWorkers.length && this.availableWorkers.length) {
            this.notifyWorkers.shift()(this.availableWorkers.shift());
        }
    }

    async getProgramStatsFromFile(file) {
        return new Promise((resolve, reject) => {
            return this.getFreeWorker()
                .then((worker) => {
                    worker.once('message', (stats) => {
                        this.availableWorkers.push(worker);
                        this.notifyFreeWorker();
                        resolve(stats);
                    });
                    worker.send(file);
                })
        });
    }

    freeThreads() {
        this.availableWorkers.forEach((worker) => worker.kill());
    }
}

function getPool(cpuCount) {
    if (cpuCount === 1) {
        return SingleThreadedPool;
    } else {
        return MultiThreadedPool;
    }
}

export default getPool(config.cpuCount);
