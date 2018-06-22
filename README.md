Recent statistics can be found at

* [program-statistics.json](https://github.com/robertpainsi/robertpainsi.github.data/blob/master/catrobat/program-statistics.json)

### Installation

First, you need a bunch of code files[1] you want to create the statistics from. Then
* Install npm dependencies with `npm install`
* Calculate statistics by using `node ‑r @babel/register src/index.js <arguments>`

| argument | description | status | default |
| --- | --- |  --- | --- |
| `‑‑program‑folder` | The program folder will be searched recursively for \*\*/\*.xml files | required, **deprecating**[1] | |
| `‑‑output‑file` | | required |
| `‑‑cache‑folder` | By setting a cache folder, calculated statistics of each program will be stored. This drastically improves performance if you calculate statistics on all of these programs. However, each time you change `program‑stats.js` and related source files, clear the cache folder. | | |
| `‑‑workers` | Speeds up calculating statistics for each program by using as many forked workers as possible. By using 1, no workers will be forked (helpful for debugging). | | #cpus |

[1] https://github.com/robertpainsi/catrobat-program-statistics/issues/4
