var gulp = require('gulp');

gulp.paths = {
  tssrc: [
    '**/*.ts',
    '!node_modules/**/*',
    '!dist/**/*',
    '!typings/**/*',
    '!**/*.{ts,coffee}.js'],
  jssrc: [
    '*.js',
    'gulp-tasks/*.js',
    '!ng2-table.js',
    '!angular2-table.js',
    '!node_modules',
    '!**/*.{ts,coffee}.js']
};

require('require-dir')('./gulp-tasks');

var rimraf = require('gulp-rimraf');
gulp.task('clean', function (cb) {
  return gulp.src('dist', {read: false})
    .pipe(rimraf());
});

gulp.task('default', function () {
  gulp.start('lint');
});
