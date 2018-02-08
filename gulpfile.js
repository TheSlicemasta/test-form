'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');

const srcDir = './src';
const buildDir = './build';

gulp.task('style', function() {
	return gulp.src(srcDir+'/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", notify.onError({
		   message: 'SASS compile error: <%= error.message %>'
		 })))
		.pipe(autoprefix('last 10 version'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(buildDir+'/css/'))
		.pipe(notify('Все стадии компиляции завершены!'))
});

gulp.task('styleBuild', function() {
	return gulp.src(srcDir+'/sass/**/*.scss')
		//.pipe(sourcemaps.init())
		.pipe(sass().on("error", notify.onError({
		   message: 'SASS compile error: <%= error.message %>'
		 })))
		.pipe(autoprefix('last 10 version'))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest(buildDir+'/css/'))
		.pipe(notify('Все стадии компиляции завершены!'))
});

gulp.task('watch', function() {
	watch(srcDir + '/**/*.scss', function(event, cb) {
		gulp.start('style');
	});
});

gulp.task('default', ['watch']);
gulp.task('build', ['styleBuild']);