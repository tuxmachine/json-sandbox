#!/usr/bin/env node

'use strict';

const repl = require('repl'),
    fs = require('fs'),
    fetch = require('node-fetch'),
    cheerio = require('cheerio'),
    xml2js = require('xml2js'),
    _ = require('lodash');

var data = {};

console.log('Welcome to JSON playground');
console.log("I've preloaded fs, lodash, cheerio, xml2js and fetch libraries, go wild :)");
if(process.argv.length > 2) {
    data = fs.readFileSync(process.argv[2]);
    try {
        data = JSON.parse(data);
        console.log('`data` populated with file input')
    } catch (error) {
        console.log('File is not JSON, loaded as a string');
    }
}

// For cli, check if script is called directly
if (require.main === module) {
    var r = repl.start({
        prompt: ' >  ',
        useGlobal: true
    });
    r.context.data = data;
    r.context._ = _;
    r.context.fs = fs;
    r.context.fetch = fetch;
    r.context.cheerio = cheerio;
    r.context.xml2js = xml2js;
}


