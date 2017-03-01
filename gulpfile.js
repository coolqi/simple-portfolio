var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	plumber = require('gulp-plumber');

//minify js files
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));
});

//minify css files
gulp.task('styles', function() {
	gulp.src('css/*.css')
		.pipe(plumber())
		.pipe(minifyCSS())
		.pipe(rename('index.css'))
		.pipe(gulp.dest('css/'));
});

//watch all changes automatically
gulp.task('watch', function() {
	gulp.watch('js/*.js',['scripts']);
	gulp.watch('css/*.css',['styles']);
})

gulp.task('default', ['scripts', 'styles', 'watch']);