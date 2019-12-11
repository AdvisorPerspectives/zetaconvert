# zetaconvert
Convert and Filter Zeta event JSON files to CSV

## Install
```
$ npm install
```

## Execution:
```
$ node zetaconvert <file> <options>
```
Will generate a csv file in the same directory with `.csv` appended to the end.
default.

### Create a shell script
See `example-script.sh` for examples of how to create a shell script to run multiple converts at a time, and to easily construct them in a file. Create your own `.sh` file and then run with with `bash` like:

```bash
bash example-script.sh
```
but substitute your own file.

## Options:

### Output FIle
Specify an output filename. If not specified, the input file name will be used with `.csv` added to the end of it.
```
--output="events_20191126-whitepaper.csv"
```

#### URL
Action contains a certain URL
```
--url="http://www.google.com`
```

#### Campaign
Action from a certain campaign
```
--campaign="DEDI: Allianz resend 201911" 
```

#### Clicked
Action is a click
```
--clicked
```