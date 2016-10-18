# react-howler
A React.js wrapper for howler.js (audio player).

ReactHowler has no UI. You has to provide your own UI

Props can be passed to control playback and react to events such as end, load, play, ...

[![Travis status](https://travis-ci.org/thangngoc89/react-howler.svg)](https://travis-ci.org/thangngoc89/react-howler)
[![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/thangngoc89/react-howler)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm](https://img.shields.io/npm/v/react-howler.svg)](https://npmjs.org/package/react-howler)
[![dependencies](https://david-dm.org/thangngoc89/react-howler.svg)](https://david-dm.org/thangngoc89/react-howler)

# howler.js

[howler.js](https://github.com/goldfire/howler.js/) is an audio library for the modern web. It defaults to Web Audio API and falls back to HTML5 Audio.


# Usage

`npm install --save react-howler`

```javascript
import React, { Component } from 'react'
import ReactHowler from 'react-howler'

class App extends Component {
  // This sound file may not work due to cross-origin setting
  render () {
    return (
      <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
      />
    )
  }
}
```

For a full working example please see it in  [App.js](https://github.com/thangngoc89/react-howler/tree/master/examples/react/App.js)

# Demo

[http://khoanguyen.me/react-howler/](http://khoanguyen.me/react-howler/)
or

```shell
git clone http://github.com/thangngoc89/react-howler
npm install
npm run example:react
open http://localhost:3000
```

# Props

Prop      | Default | Description
----      | ------- | -----------
src       |         | The src of songs for playing. Can be a string or an array
playing   | true    | Set to `true` or `false` to pause or play the media. This also invokes autoplay on initial load
loop      | false   | Set to `true` or `false` to enable/disable loop
mute      | false   | Set to `true` or `false` to mute/unmute current audio
volume    | 1.0     | The volume of the specific howl, from `0.0` to `1.0`
onPlay    | noop    | Called when audio starts or resumes playing
onPause   | noop    | Called when audio is paused
onVolume  | noop    | Called when volume is changed
onStop    | noop    | Called when audio is stopped
onLoad    | noop    | Called when audio is loaded (buffered)
onLoadError | noop  | Called when an error occurs whilst attempting to load media
onEnd     |  noop   | Called when media finishes playing

# Methods

#### duration([id])
Get the duration of the audio source. Will return 0 until after the `load` event fires.
* **id**: `Number` `optional` The sound ID to check. Passing an ID will return the duration of the sprite being played on this instance; otherwise, the full source duration is returned.

#### seek([seek])
Get/set the position of playback for a sound.
* **seek**: `Number` `optional` The position to move current playback to (in seconds).

#### stop([id])
Stops playback of sound, resetting `seek` to `0`.
* **id**: `Number` `optional` The sound ID. If none is passed, all sounds in group are stopped.

#### Other howler.js methods
If you need to use other howler.js [methods](https://github.com/goldfire/howler.js#methods)
that are not included in this wrapper you can access the howler instance directly via `howler`

```javascript
import React, { Component } from 'react'
import ReactHowler from 'react-howler'

class App extends Component {
  getHower () {
    this.audio.howler
  }

  getDuration () {
    this.audio.duration()
  }

  getSeek () {
    this.audio.seek()
  }

  setSeek () {
    this.audio.seek(0.5)
  }
  // This sound file may not work due to cross-origin setting
  render () {
    return(
      <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
        ref={(ref) => this.audio = ref}
      />
    );
  }
}
```

# Howler global core methods

Howler global methods are avaiable in window scope.
Please refer to [howler's documentation](https://github.com/goldfire/howler.js#global-methods)

Usage:

```js
window.Howler.mute(true) // Mute all sounds
```

# Linting

This project uses standard code style.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```
npm run lint
```

# Audio file in examples

Taken from [howler.js demo page](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library)

Sound file direct link: [sound.ogg](http://goldfirestudios.com/proj/howlerjs/sound.ogg)

# License

MIT
