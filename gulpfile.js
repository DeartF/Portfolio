var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');

gulp.task('prefixed' , function() {
	gulp.src([
		'css/comp/*.css' ,
		'css/vendor/reset.css'
	])
	.pipe(postcss([
		autoprefixer({browsers: 'last 5 versions' ['ie 8' , 'ie 7']})
	]))
	.pipe(gulp.dest('prefix'))

})

gulp.task('css' , function() {
	gulp.src([
		'prefix/*.css'
	])
	.pipe(concat('main.min.css'))
	.pipe(csso())
	.pipe(gulp.dest(''))
	.pipe(browserSync.reload({stream:true}))
})

gulp.task('browser-sync' , function() {
	browserSync({
		server: {
			baseDir: '../Portfolio/',
			index: 'home.html'
		},
		notify: false
	})
})


gulp.task('watch' , ['browser-sync' , 'prefixed' , 'css'] , function() {
	gulp.watch('css/comp/*.css' , ['prefixed' , 'css'])
	gulp.watch('main.min.css' , browserSync.reload)
	gulp.watch('*.html' , browserSync.reload)
	gulp.watch('js/*.js' , browserSync.reload)
})

