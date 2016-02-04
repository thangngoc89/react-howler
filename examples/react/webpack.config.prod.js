var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
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
      'react-howler': path.join(__dirname, '../../src/index.js'),
      'sound.ogg': path.join(__dirname, '../../test/stubs/sound.ogg')
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
