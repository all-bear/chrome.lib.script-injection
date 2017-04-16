const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-babel-minify');

gulp.task('default', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});