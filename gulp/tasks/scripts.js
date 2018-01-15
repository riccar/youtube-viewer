//Gulp tasks to execute webpack
const gulp = require('gulp'),
webpack = require('webpack');

/*Execute webpack. callback is passed and executed to let Gulp know when
the webpack finishes. The parameters err and stats can be printed in the console
for debugging*/
gulp.task('scripts', function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});