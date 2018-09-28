var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'public/stylesheets/scss/**/*.scss',
    cssDest = 'public/stylesheets/css/';

gulp.task('stylesheets', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch',function() {
    gulp.watch(sassFiles,['stylesheets']);
});