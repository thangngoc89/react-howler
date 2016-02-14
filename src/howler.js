let Howler

if (typeof window !== 'undefined') {
  Howler = require('howler')
}

module.exports = Howler
