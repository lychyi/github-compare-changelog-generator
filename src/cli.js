#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const minimist = require('minimist');
const mkdirp = require('mkdirp');

const {
  formatCommits,
  succinctFormatter
} = require('./gccg');

const cli = async (args, formatter) => {
  /**
   * Args:
   * --compareUrl
   * --outFile
   */
  const {
    compareUrl,
    outFile
  } = minimist(args);

  let output = await formatCommits(compareUrl, formatter);

  if (outFile) {
    const dir = path.dirname(outFile);
    try {
      mkdirp.sync(dir);
      fs.writeFileSync(outFile, output);
      console.log(`Changelog contents written successfuly to: ${outFile}`);
      process.exit(0);
    } catch(e) {
      throw new Error(`Error writing changelog contents: \n${e}`);
    }
  } else {
    console.log(output);
  }
}

cli(process.argv.slice(2), succinctFormatter);