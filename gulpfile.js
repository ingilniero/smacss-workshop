var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    concat = require('gulp-concat'),
    port = process.env.port || 3031;

gulp.task('open', function(){
  var options = {
    url: 'http://localhost:' + port,
  };

  gulp.src('./app/index.html')
      .pipe(open('', options));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: port,
    livereload: true
  });
});

gulp.task('js', function() {
  gulp.src('./app/src/js/**/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./app/dist/js/'))
      .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(['./app/src/css/**/*.css'])
      .pipe(concat('main.css'))
      .pipe(gulp.dest('./app/dist/css/'))
      .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
      .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('app/src/js/*.js', ['js']);
  gulp.watch('app/src/css/**/*.css', ['css']);
  gulp.watch('app/index.html', ['html']);
});

gulp.task('serve', ['connect', 'open', 'watch']);
gulp.task('default', ['build', 'serve']);
gulp.task('build', ['js', 'css']);

gulp.task('serveprod', function() {
  connect.server({
    root: 'app',
    port: process.env.PORT || 5000,
    livereload: false
  });
});
