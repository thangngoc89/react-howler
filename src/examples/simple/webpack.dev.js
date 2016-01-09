var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './main.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body'
    })
  ],
  resolve: {
    alias: {
      'react-howler': path.join(__dirname, '../../index.js'),
      'sound.ogg': path.join(__dirname, '../../../tests/stubs/sound.ogg')
    },
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'standard',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(ogg|mp3)$/,
        loader: 'url-loader'
      }
    ]
  }
}
