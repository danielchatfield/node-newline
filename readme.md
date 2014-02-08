# newline

## Install

Install with npm

```
npm install --save newline
```

## Usage


```javascript
// Detects the line ending used in the string source and returns "CR", "LF" or "CRLF"
newline.detect(source);

var newSource = newline.set(source, "LF"); // Sets the source to the specified line endings
```



