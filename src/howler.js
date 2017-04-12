let Howler

if (typeof window !== 'undefined') {
  const requirePath = ( process.env.NODE_ENV === 'test' ) ? 'howler/dist/howler.core.min' : 'howler';
  Howler = require(requirePath);
}

module.exports = Howler
