Need to do some manipulation of (JSON) data and too lazy to write a script? Do it interactively!

JSON sandbox provides a Node REPL preloaded with some modules for some quick 'n dirty data manipulation.

* fs
* node-fetch
* Lodash
* Bluebird
* Cheerio

# Usage

```
$ index.js [/path/to/data.json]
 > _.map(data, 'name');
```

Want to save your REPL session for future usage?

```
 > .save /path/to/script.js
```
