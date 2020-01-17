import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    folder: {
        assets: path.join(__dirname, 'assets'),
    },
};
