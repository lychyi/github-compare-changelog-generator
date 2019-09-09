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

  if (!compareUrl || typeof compareUrl !== 'string') {
    throw `
      Error: Need a url to parse! Github Compare URLs show the commits between two commit ranges.\n
      Must be a valid url: it is usually in the format: https://github.com/<org>/<repo>/<start>...<end>\n
      You can also get this url by going to your repo and creating a 'New Pull Request'. This will allow you to compare changes between commits/tags/branches.
    `;
  }

  let output = await formatCommits(compareUrl, formatter);

  if (outFile) {
    const dir = path.dirname(outFile);
    try {
      mkdirp.sync(dir);
      fs.writeFileSync(outFile, output);
      return `Changelog contents written successfuly to: ${outFile}\n`;
    } catch(e) {
      throw `Error writing changelog contents: \n${e}`;
    }
  } else {
    return output;
  }
}

cli(process.argv.slice(2), succinctFormatter).then(
  (value) => {
    console.log(value);
    process.exit(0);
  },
  (reason) => {
    console.error(reason);
    process.exit(1);
  });
