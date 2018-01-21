const gulp = require('gulp');

//require postcss as a CSS preprocessor
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');


//style task called from the watch task to pipe PostCSS features
gulp.task('styles', function() {
  
  console.log("Parsing CSS file");

  return gulp.src('./src/style/style.css')

  //pipe the postcss features or filters to be applied to the source file
  .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))

  //on error function to catch errors and prevent gulp from stop running
  .on('error', function (errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })

  //pipe the destination folder to save source file
  .pipe(gulp.dest('./src/temp/style'));
    
});

gulp.task('fonts', function() {
  
    console.log("Moving fonts to build folder");
    return gulp.src('./src/style/fonts/**/*')
    .pipe(gulp.dest('./src/temp/style/fonts'));
  
});