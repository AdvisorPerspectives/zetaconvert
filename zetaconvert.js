#!/usr/bin/env node
const yargs = require('yargs');
const fs = require('fs');
const lineReader = require('line-reader');

// Define command line arguments
const argv = yargs
    .scriptName("zetaconvert")
    .usage('$0 <file> [args]', false, (yargs) => {
      yargs.positional('file', {
        type: 'string',
        describe: 'input json file'
      })
    })
    .option('url', {
      alias: 'u',
      type: 'string',
      description: 'Url to search for'
    })
    .option('campaign', {
      alias: 'c',
      type: 'string',
      description: 'Campaign to search for'
    })
    .option('clicked', {
      type: 'boolean',
      description: 'Clicked events'
    })
    .option('output', {
      alias: 'o',
      type: 'string',
      description: 'Output file name'
    })
    .option('append', {
      alias: 'a',
      type: 'boolean',
      description: 'Append to output file instead of overwrite.'
    })
    .help()
    .argv;

// Set input / output file names
const inputFile = argv.file;
const outputFile = argv.output ? argv.output : argv.file + '.csv';

// Run program
try {
  if (!argv.append) {
    clearOutputFile();
  }
  parseInputFile();
} catch (err) {
  console.error(err)
}

// Only process records where this function returns true
function filterLine(line) {
  if (argv.clicked && line.indexOf('clicked') < 0) {
    return false;
  }

  if (argv.campaign && line.indexOf(argv.campaign) < 0) {
    return false;
  }

  if (argv.url && line.indexOf(argv.url.replace(/\//g, '\\/')) < 0) {
    return false;
  }

  return true;
}

// Convert line by line
function parseInputFile() {
  let convertedLines = 0;
  let totalLines = 0;

  let writeStream = fs.createWriteStream(outputFile, {flags:'a'},  function(err) {
    if (err) {
      return console.error('write', err);
    }
  });

  let readStream = fs.createReadStream(inputFile,  function(err) {
    if (err) {
      return console.error('read', err);
    }
  });

  const outputFileExist = fs.existsSync(outputFile);

  // For Each Input File Line
  lineReader.eachLine(readStream, function (line) {
      if (filterLine(line)) { // Process only certain lines
        convertedLines++;

        // Write CSV Headers
        if ((!argv.append  && convertedLines === 1) || (argv.append && !outputFileExist)) {
          writeStream.write('"Date","Campaign Name","Event","Url","Email"' + '\r\n');
        }

        // Convert line to JSON
        const json = JSON.parse(line);

        // Write CSV Row
        const date =  json.event_time.split('T')[0];

        writeStream.write('"' + date + '","' + json.campaign_name + '","' + json.event_type + '","' + json.url + '","' + json.email + '"\r\n');
      }

    totalLines++;
  }, function () {

    // DONE: Output end, stats
    console.log(outputFile + ((!outputFileExist || !argv.append) ? ' created' : ' appended to'));
    console.log('Converted: ' + convertedLines + ' of ' + totalLines + ' rows');
  });
}

function clearOutputFile()
{
  // Clear CSV file
  let fd = fs.openSync(outputFile, 'w');
  fs.writeFileSync(fd, '');
  fs.closeSync(fd);
}

