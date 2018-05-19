var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('prefixer', function() {
	gulp.src([
		'css/comp/*.css',
		'css/vendor/*.css'
	])
	.pipe(postcss([
		autoprefixer({browsers: 'last 2 version'})
	]))

	.pipe(gulp.dest('prefixed'));
});

gulp.task('css', function() {
	gulp.src([
		'prefixed/*.css'
	])

	.pipe(concat('main.min.css'))
	.pipe(csso())
	.pipe(gulp.dest(''))
})

gulp.task('js', function() {
	gulp.src([
		'js/modal.js',
		'js/scroll.js'
	])
	.pipe(concat('main.min.js'))
	.pipe(uglify({mangle: true}))
	.pipe(gulp.dest(''))
})

//gulp.task('default', ['prefixer']);
gulp.task('default', ['css']);
//gulp.task('default', ['js']);