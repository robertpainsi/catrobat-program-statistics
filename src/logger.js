import config from './config';

export function log() {
    if (config.debug) {
        console.log(...arguments);
    }
}
