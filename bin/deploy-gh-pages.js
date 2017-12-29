'use strict'

const ghpages = require('gh-pages')
const path = require('path')

const callback = function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Finish')
}

console.log('Start deployment process.')

console.log('Clean up temp folder')
ghpages.clean()

console.log('Deploy with github token')
ghpages.publish(path.join(__dirname, '../examples/react/build'), {
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/thangngoc89/react-howler.git',
  silent: true
}, callback)
