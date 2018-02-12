var gulp = require('gulp');
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', function() {
	return gulp.src('app/sass/main.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSynс({
		server: {
			baseDir: 'app'
	},
	notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass',['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});