var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './test.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main-bin.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
