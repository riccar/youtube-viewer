var path = require('path');

module.exports = {
  entry: [
    './src/components/index.js'
  ],
  output: {
    //path: __dirname,
    path: path.resolve(__dirname, "./src/temp/scripts"),
    //publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
