"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('default', ['sass', 'sass:watch']);

gulp.task('sass', function () {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({
            includePaths: ['./src/styles/']
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./build/assets/css'));
});


gulp.task('sass:watch', function () {
    gulp.watch('./src/styles/*.scss', ['sass']);
});
