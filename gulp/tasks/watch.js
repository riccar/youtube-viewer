const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

//Watch task to trigger other tasks when target files are modified
gulp.task('watch', function() {

  /*Initialize browser-sync*/
  browserSync.init({
    notify: false,
    server: {
      baseDir: "src"
    }
  });
  
  watch('./src/index.html', function() {
    console.log("Index file was modified!");
    //Reload browser when the index.html changes
    browserSync.reload();
  });


  /*Watch for any change to the script files*/
  watch('./src/components/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
  
});


  /*Execute task scriptRefresh after script finishes.
ScriptRefresh watches the scripts folder for any change and reload the browser*/
gulp.task('scriptsRefresh', ['scripts'], function() {
  console.log("JS file was modified!");
  browserSync.reload();
});