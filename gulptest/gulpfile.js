var gulp=require('gulp');

var vulcanize=require('gulp-vulcanize');
gulp.task('build',function(){
	 gulp.src('./imports/index.html')
	.pipe(vulcanize({
		dest:'./bin',
		strip:true
	}))
	.pipe(gulp.dest('./bin'));
	
});

