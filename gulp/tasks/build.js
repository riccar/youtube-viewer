const gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
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

//Optimize and copy all the image files to the docs folder but wait until the deleteDistFolder task finishes
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./src/images/**/*'])
    .pipe(imagemin({
      //Optimize jpeg
      progressive: true,
      //Optimize gif
      interlaced: true,
      //Optimize svg
      multipass: true
    }))
    .pipe(gulp.dest("./docs/images"));
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
gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'useminTrigger']);