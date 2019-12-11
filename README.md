# Convert Zeta JSON files to CSV

## Install
```
$ npm install
```

## Execution:
```
$ node apconvert <file> <options>
```
Will generate a csv file in the same directory with `.csv` appended to the end.
default.

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