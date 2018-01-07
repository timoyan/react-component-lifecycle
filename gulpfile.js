"use strict";

var gulp = require('gulp');
var gConnect = require('gulp-connect');
var gOpen = require('gulp-open');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


var config = {
    port: 9006,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.jsx',
        dist: './dist',
        mainJs: './src/main.jsx'
    }
}

gulp.task('connect', function() {
    gConnect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(gOpen({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(gConnect.reload());
});

gulp.task('js', function() {
    browserify(config.paths.mainJs, { "extensions": [".jsx"] })
        .transform("babelify", { presets: ["env", "react"] })
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts/'))
        .pipe(gConnect.reload())
})

gulp.task('watch', function() {
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['js', 'html', 'open', 'watch']);