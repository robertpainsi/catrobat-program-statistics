'use strict';

export function createProgramStatsCache(createStats) {
    const cache = new Map();
    return async function(programVersion) {
        if (cache.has(programVersion)) {
            return cache.get(programVersion);
        }

        const stats = await createStats(programVersion);
        cache.set(programVersion, stats);
        return stats;
    };
}
