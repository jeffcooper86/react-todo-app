var gulp = require('gulp');
var connect = require('gulp-connect');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackConfigProd = require('./webpack.config.prod.js')
var sass = require('gulp-sass');

gulp.task('build', ['js', 'scss', 'html'])
gulp.task('prod', ['setProd', 'build']);

gulp.task('js', function() {
  const config = isProd() ? webpackConfigProd : webpackConfig;
  return gulp.src('src/js/app.js')
    .pipe(webpackStream(config, webpack))
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

gulp.task('watch', function() {
  gulp.watch('src/{js,jsx}/**', ['js']);
  gulp.watch('src/scss/**', ['scss']);
  gulp.watch('src/**/*.html', ['html']);
});

gulp.task('setProd', function() {
  return process.env.NODE_ENV = 'production';
});

function isProd() {
  return process.env.NODE_ENV === 'production';
}
