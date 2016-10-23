var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './main'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
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
      'react-howler': path.join(__dirname, '../../lib/index.js'),
      'sound.ogg': path.join(__dirname, '../../test/stubs/sound.ogg')
    },
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'standard',
        include: [
          __dirname
        ],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          __dirname
        ],
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
