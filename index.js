#!/usr/bin/env node

'use strict';

const repl = require('repl'),
    fs = require('fs'),
    fetch = require('node-fetch'),
    bluebird = require('bluebird'),
    cheerio = require('cheerio'),
    _ = require('lodash');

var data = {};

console.log('Welcome to JSON playground');
console.log("I've preloaded fs, lodash, bluebird, cheerio and fetch libraries, go wild :)");
if(process.argv.length > 2) {
    data = fs.readFileSync(process.argv[2]);
    try {
        data = JSON.parse(data);
        console.log('`data` populated with file input')
    } catch (error) {
        console.log('File is not JSON');
    }
}

// For cli, check if script is called directly
if (require.main === module) {
    var r = repl.start({
        prompt: ' >  ',
        useGlobal: true
    });
    r.context.data = data;
    r.context.lo = _;
    r.context.fs = fs;
    r.context.fetch = fetch;
    r.context.cheerio = cheerio;
    r.context.bluebird = bluebird;
}


