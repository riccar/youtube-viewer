const gulp = require('gulp'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
   /*Initialize browser-sync to open a web browser-sync
  and display the index.html at the app folder*/
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

//Delete the content of the docs folder before starting every build
gulp.task('deleteDistFolder', function() {
  return del(['./docs']);
});


//Trigger the usemin function after the deleteDistFolder finishes
gulp.task('useminTrigger', ['deleteDistFolder'], function() {
  gulp.start("usemin");
})

//Before copying, revision and compress css and js, wait until the 'styles' and 'script' files are saved
gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src('./src/index.html')
    //Usemin compress and revision the file
    //removing usemin pipe of cssnano and uglify since they trigger error for react bundle js file 
    .pipe(usemin({
      css: [ rev ],
      js: [ rev ]
    }))
    .pipe(gulp.dest("./docs"));
});



//build task to execute multiple build related task in the correct order
gulp.task('build', ['deleteDistFolder', 'useminTrigger']);