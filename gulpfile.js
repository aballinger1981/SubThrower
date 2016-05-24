var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// create a task that ensures the `js` task is complete before
// reloading browsers
// gulp.task('reload-browser', function(){
//     console.log(browserSync.reload());
// });

// use default task to launch Browsersync and watch JS files
gulp.task('autoReload', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
          baseDir: "./",
          reloadDelay: 5000,
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    // gulp.watch("*.js", ['reload-browser']);
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("*.js").on("change", browserSync.reload);
});