var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'public/stylesheets/scss/**/*.scss',
    cssDest = './public/stylesheets/css';

gulp.task('stylesheets', function(){
    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/css'))
});


gulp.task('default', function() {
    console.log("Hello master!")
    console.log("Let me watch stylesheets for you.")
    
    // gulp.watch('public/stylesheets/sass/**/*.scss', gulp.series('stylesheets')); 
    gulp.watch(sassFiles,['stylesheets']);
});