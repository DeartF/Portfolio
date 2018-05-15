var 
	gulp = require("gulp");
	livereload = require("gulp-livereload");

gulp.task('reload-css', function() {
	gulp.src('./style/all.css');
	.pipe(livereload());
	})

gulp.task('default', function() {
	livereload.listen();
	gulp.watch('./style/all.css', ['reload-css']);
});