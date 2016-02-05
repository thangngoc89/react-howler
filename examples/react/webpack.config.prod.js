var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')

webpackConfig.entry = ['./main.js']
webpackConfig.devtool = 'source-map'
webpackConfig.plugins.push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  })
)

module.exports = webpackConfig
