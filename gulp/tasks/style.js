const gulp = require('gulp');

//require postcss as a CSS preprocessor
const postcss = require('gulp-postcss');

//require or import to be able to import css files within other css files
const cssImport = require('postcss-import');


//style task called from the watch task to pipe PostCSS features
gulp.task('styles', function() {
  
  console.log("Parsing CSS file");

  return gulp.src('./src/style/style.css')

  //pipe the postcss features or filters to be applied to the source file
  .pipe(postcss([cssImport]))

  //on error function to catch errors and prevent gulp from stop running
  .on('error', function (errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })

  //pipe the destination folder to save source file
  .pipe(gulp.dest('./src/temp/style'));
    
});