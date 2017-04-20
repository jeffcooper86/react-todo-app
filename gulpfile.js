var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var sass = require('gulp-sass');

gulp.task('build', ['js', 'scss', 'html'])

gulp.task('js', function() {
  return gulp.src('src/js/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/js/'))
});

gulp.task('scss', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'build'
  });
});

gulp.task('default', ['build']);
