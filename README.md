Recent statistics can be found at

* [program-statistics.json](https://github.com/robertpainsi/robertpainsi.github.data/blob/master/catrobat/program-statistics.json)

### Requirements

* Node.js version 12+
* npm
* A bunch of code files (.xml or .catrobat).

### Install

* Install npm dependencies with `npm install`

### Usage

* Calculate statistics by using `node --experimental-modules --es-module-specifier-resolution=node --experimental-worker src/index.js <arguments>`

| argument | description | status | default |
| --- | --- |  --- | --- |
| `‑‑program‑folder` | A single .xml or .catrobat file, or a folder which will be searched recursively for .xml or .catrobat files | required, deprecating | |
| `‑‑output‑file` | If specified, the output JSON will be written to the file. If not specified, the output will be written to the console which can be useful by using the > operator (e.g. `node ... > path/to/statistics.json`) | optional |
| ~~-`‑‑cache‑folder`-~~ | ~~By setting a cache folder, calculated statistics of each program will be stored. This drastically improves performance if you calculate statistics on all of these programs. However, each time you change `program‑stats.js` and related source files, clear the cache folder.~~ | not working | |
| `‑‑workers` | Speeds up calculating statistics for each program by using as many forked workers as possible. By using 1, no workers will be forked (helpful for debugging). | | #cpus |

### Example

```
node --experimental-modules --es-module-specifier-resolution=node --experimental-worker src/index.js --program-folder path/to/programs --output-file path/to/output/statistics.json
```
