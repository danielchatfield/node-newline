"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var paths = {
  scripts: ['gulpfile.js', 'index.js', 'lib/*', 'test/*.js']
};

gulp.task('lint', function(){
  var jshintConfig = require("./package").jshintConfig;

  gulp.src(paths.scripts)
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['lint']);
});

gulp.task('default', ['lint', 'test']);
