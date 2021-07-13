# react-howler

A React.js wrapper for howler.js (audio player).

ReactHowler has no UI, you have to provide your own UI.

Props can be passed to control playback and react to events such as end, load, play, ...

[![Travis status](https://travis-ci.org/thangngoc89/react-howler.svg)](https://travis-ci.org/thangngoc89/react-howler)
[![Greenkeeper badge](https://badges.greenkeeper.io/thangngoc89/react-howler.svg)](https://greenkeeper.io/)

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

For a full working example please see it in  [App.js](https://github.com/thangngoc89/react-howler/tree/master/examples/react/src/App.js)

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
src       |         | The sources to the track(s) to be loaded for the sound (URLs or base64 data URIs). These should be in order of preference, howler.js will automatically load the first one that is compatible with the current browser. If your files have no extensions, you will need to explicitly specify the extension using the `format` property. <br> Updating the `src` prop on the fly will destroy any currently playing howler instance and create a new one with the new `src`. Updating other props while keeping the `src` the same will maintain the current howler instance.
preload   | true    | Set to `true` to begin downloading the audio file if it is not loaded yet.
playing   | true    | Set to `true` or `false` to pause or play the media.<br>Setting to `true` on initial load will play the audio immediately after it is loaded
loop      | false   | Set to `true` or `false` to enable/disable loop
mute      | false   | Set to `true` or `false` to mute/unmute current audio
volume    | 1.0     | The volume of the specific howl, from `0.0` to `1.0`
rate      | 1       | The initial playback rate (speed)
html5     | false   | Set to `true` to force HTML5 Audio. This should be used for large audio files so that you don't have to wait for the full file to be downloaded and decoded before playing.
format    | []      | howler.js automatically detects your file format from the extension, but you may also specify a format in situations where extraction won't work (such as with a SoundCloud stream).
xhr       | {}      | When using Web Audio, howler.js uses an XHR request to load the audio files. If you need to send custom headers, set the HTTP method or enable `withCredentials` ([see reference](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)), include them with this parameter. Each is optional (method defaults to `GET`, headers default to `null` and withCredentials defaults to `false`). For example: <pre lang="JSX">`<ReactHowler src="sound.webm" xhr={{ method: 'POST', headers: { Authorization: 'Bearer:' + token, }, withCredentials: true, }} />`</pre>
onPlay    | noop    | Called when audio starts or resumes playing
onPause   | noop    | Called when audio is paused
onVolume  | noop    | Called when volume is changed
onStop    | noop    | Called when audio is stopped
onLoad    | noop    | Called when audio is loaded (buffered)
onLoadError | noop  | Called when an error occurs whilst attempting to load media
onEnd     |  noop   | Called when media finishes playing
onSeek    | noop    | Called when the sound has been seeked. The first parameter is the ID of the sound. `onSeek(id)`
onPlayError | noop  | Called when the sound is unable to play. The first parameter is the ID of the sound and the second is the error message/code. `onPlayError(id, errorCode)`

# Methods

#### duration([id])
Get the duration of the audio source. Will return 0 until after the `load` event fires.
* **id**: `Number` `optional` The sound ID to check. Passing an ID will return the duration of the sprite being played on this instance; otherwise, the full source duration is returned.

#### load()
When `preload` is `true` this is automatically called. When setting `preload` to `false`, you can call `load()` manually before playing sounds (useful for lazy loading large files on slow networks). If you attempt to play a sound that's not loading or loaded with preload react-howler will automatically call `load()`.

*Tip*: If you're calling `load()` manually, check the load status with `howlerState()`

#### seek([seek])
Get/set the position of playback for a sound.
* **seek**: `Number` `optional` The position to move current playback to (in seconds).

#### howlerState()
Check the load status of the `Howl`, returns a string `unloaded`, `loading` or `loaded`.

*This is an alias for Howler's `state()` function*

#### stop([id])
Stops playback of sound, resetting `seek` to `0`.
* **id**: `Number` `optional` The sound ID. If none is passed, all sounds in group are stopped.

#### rate([value], [id])
Speeds up/down an audio playback.
Calling with no arguments will reset all howls to default rate.
* **value**: `Number` `optional` The playback rate. If empty, will default to `1`.
* **id**: `Number` `optional` The sound ID. If empty, all sounds in group get updated.

#### Other howler.js methods
If you need to use other howler.js [methods](https://github.com/goldfire/howler.js#methods)
that are not included in this wrapper you can access the howler instance directly via `howler`

```javascript
import React, { Component } from 'react'
import ReactHowler from 'react-howler'

class App extends Component {
  getHowler () {
    this.player.howler
  }

  getDuration () {
    this.player.duration()
  }

  getSeek () {
    this.player.seek()
  }

  setSeek () {
    this.player.seek(0.5)
  }
  // This sound file may not work due to cross-origin setting
  render () {
    return(
      <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
        ref={(ref) => (this.player = ref)}
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

# Audio files in examples

#### `sound.ogg`
Taken from [howler.js demo page](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library)
Sound file direct link: [sound.ogg](http://goldfirestudios.com/proj/howlerjs/sound.ogg)

#### `sound2.ogg`
Fingerstyle Bass line over an Am chord progression By Serolillo (Own work) [CC BY 2.5 (http://creativecommons.org/licenses/by/2.5)], via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fingerstyle_Bass_line_over_an_Am_chord_progression.ogg)

# License

MIT
