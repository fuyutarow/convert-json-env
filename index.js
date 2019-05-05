#!/usr/bin/env node
'use strict';

const args = require('minimist')(process.argv.slice(2));
const fs = require('fs');

const msg = `
Usage:
\tconvert-json-env <input.file> <out.file> [options]
\tconvert-json-env config.json --prefix="export "
\tconvert-json-env config.json --out=.env.local --prefix=VUE_APP_

Options:
\t--out\t\tThe output file path.
\t--prefix\tThe prefix of environment variables in env file.
\t--suffix\tThe suffix of environment variables in env file.
`

if (args.help || args.h) {
  console.log(msg);
  return;
}

const inputFile = args._[0];
const inputFileExt = inputFile.split('.').slice(-1)[0];
const inputFileStem = inputFile.split('.').slice(0, -1).join();
const prefix = args.prefix ? args.prefix : '';
const suffix = args.suffix ? args.suffix : '';
const outputFile = args.out ? args.out : `${inputFileStem}.env`;

if (!args._.length) {
  console.log('Invalid usage. Try `convert-json-env --help` for help.');
  return;
} else if (inputFileExt !== 'json') {
  console.log(
      '❌ This file is not *.json. Try `convert-json-env --help` for help.');
  console.log();
  return;
}

const rawdata = fs.readFileSync(inputFile);
const data = JSON.parse(rawdata);

const st = Object.keys(data)
               .map(k => `${prefix}${k}${suffix}='${data[k]}'`)
               .join('\n');
fs.writeFileSync(outputFile, st);
console.log(`✅ ${outputFile} created.`)
