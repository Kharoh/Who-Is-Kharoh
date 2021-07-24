const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  }
});