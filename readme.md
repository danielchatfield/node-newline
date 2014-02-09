# newline [![Build Status](https://travis-ci.org/danielchatfield/node-newline.png?branch=master)](https://travis-ci.org/danielchatfield/node-newline)

## Install

Install with npm

```
npm install --save newline
```

## Usage


```javascript
// Detects the line ending used in the string source and returns "CR", "LF" or "CRLF"
newline.detect(source);


// Sets the source to the specified line endings
var newSource = newline.set(source, "LF");
```

## Testing

If you want to contribute then you can run the testsuite by running `npm test`.

## License

Artistic 2.0 (see LICENSE for more details)
