var gulp = require('gulp');

var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

var uglify = require('gulp-uglify');

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));    
});

gulp.task('scss', function() {
  return gulp.src('src/scss/*.scss')
 .pipe(sass())
 .pipe(gulp.dest('src/css'))   
});

gulp.task ('css', function(done){
    return gulp.src('src/css/*.css')
        .pipe(concatCss('css/main.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); 
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/scss/*.scss', gulp.series('scss'));
  gulp.watch('src/css/*.css', gulp.series('css'));
  gulp.watch('src/js/*.js', gulp.series('js'));
});

gulp.task('default', gulp.parallel('html', 'scss', 'css', 'js', 'watch'));