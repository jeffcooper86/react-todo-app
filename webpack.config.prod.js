var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: { path: path.join(__dirname, 'build/js'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
