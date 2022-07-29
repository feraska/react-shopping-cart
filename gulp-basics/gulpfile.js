//top level function [task-src-des-watch]
const gulp=require("gulp");
const gulpSass=require('gulp-sass');
const sass=gulpSass( require('sass'));
gulp.task('sass',async()=>{
    gulp.src('index.scss').pipe(sass()).pipe(gulp.dest('css'));
})