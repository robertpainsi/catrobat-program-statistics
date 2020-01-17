import chai from 'chai';
import glob from 'glob';

import fs from 'fs';
import path from 'path';
import config from './config.js';
import {getCodeXmlStringFromFile} from '../src/utils.js';
import {getProgramStatsFromString} from '../src/program-stats.js';
import {mergeWithDefaultStatistics} from './utils.js';

const expect = chai.expect;

describe('Test program stats', function() {
    const folders = glob.sync(`**/*/`, {cwd: config.folder.assets})
        .map((partialProgramFile) => path.join(config.folder.assets, partialProgramFile));

    for (const folder of folders) {
        it(`Test ${folder}`, function() {
            const statistics = getProgramStatsFromString(getCodeXmlStringFromFile(path.join(folder, 'code.xml')));
            expect(statistics).to.deep.equal(mergeWithDefaultStatistics(JSON.parse(fs.readFileSync(path.join(folder, 'stats.json'), 'utf8'))),
            );
        });
    }
});
