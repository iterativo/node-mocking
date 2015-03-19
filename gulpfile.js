var gulp = require("gulp"),
	shell = require('gulp-shell');

gulp.task("default", shell.task([ 'mocha -w -c' ]));