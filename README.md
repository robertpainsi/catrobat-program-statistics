Recent statistics can be found at

* [program-statistics.json](https://github.com/robertpainsi/robertpainsi.github.data/blob/master/catrobat/program-statistics.json)

### Requirements

* Node.js version 12+
* npm
* A bunch of code files you want to create the statistics from. code.xml files have to be named correctly, see https://github.com/robertpainsi/catrobat-program-statistics/issues/4 for more details.

### Install

* Install npm dependencies with `npm install`

### Run

* Calculate statistics by using `node --experimental-modules --es-module-specifier-resolution=node --experimental-worker src/index.js <arguments>`

| argument | description | status | default |
| --- | --- |  --- | --- |
| `‑‑program‑folder` | The program folder will be searched recursively for \*\*/\*.xml files | required, deprecating | |
| `‑‑output‑file` | | required |
| `‑‑cache‑folder` | By setting a cache folder, calculated statistics of each program will be stored. This drastically improves performance if you calculate statistics on all of these programs. However, each time you change `program‑stats.js` and related source files, clear the cache folder. | | |
| `‑‑workers` | Speeds up calculating statistics for each program by using as many forked workers as possible. By using 1, no workers will be forked (helpful for debugging). | | #cpus |

