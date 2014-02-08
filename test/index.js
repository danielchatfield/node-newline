"use strict";
/*jshint expr: true*/

require("should");
var lineEndings = require("../index.js");

describe('lineEndings api', function () {
  it('should have a detect method', function() {
    lineEndings.detect.should.be.a.Function;
  });
});
