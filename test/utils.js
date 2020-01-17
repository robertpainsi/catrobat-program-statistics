import merge from 'deepmerge';

export function mergeWithDefaultStatistics(o) {
    return merge({
        isLandscape: false,
        platform: 'Android',
        isRemix: false,
        scenes: 0,
        objects: 0,
        groups: 0,
        looks: 0,
        sounds: 0,
        bricks: 0,
        brickUsage: {},
        formulaUsage: {},
        objectVariables: 0,
        objectLists: 0,
        programLists: 0,
        programVariables: 0,
        features: [],
    }, o);
}
