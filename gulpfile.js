var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var jade        = require('gulp-jade');
var plumber = require('gulp-plumber');
// var watch       = require('gulp-watch'); // Snappy watch.

// Jade templates will compile at the beginning
gulp.task('default', ['serve']);

// Static server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
  // Watching the jade files. When changes, reloading after compiling.
  gulp.watch("./lib/templates/**/*.jade", ['jade-compile', reload]);
});

// Compile jade files
gulp.task('jade-compile', function() {
  // var YOUR_LOCALS = {};
  return gulp.src(['./lib/templates/*.jade'])
    .pipe(plumber())
    .pipe(jade({
      // locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'));
});
