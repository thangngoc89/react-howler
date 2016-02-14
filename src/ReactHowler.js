import React, { Component, PropTypes } from 'react'
import { Howl } from './howler'
import { noop, runIfSet } from './utils'

class ReactHowler extends Component {
  constructor (props) {
    super(props)
    this.initHowler = this.initHowler.bind(this)
  }

  componentDidMount () {
    this.initHowler()
  }

  componentWillReceiveProps (props) {
    if (props.src !== this.props.src) {
      this.initHowler(props)
    }
    this.toggleHowler(props)
  }

  componentWillUnmount () {
    this.destroyHowler()
  }
  /**
   * Create howler object with given props
   */
  initHowler (props = this.props) {
    this.destroyHowler()
    if (typeof Howl !== 'undefined') { // Check if window is available
      this.howler = new Howl({
        src: props.src,
        autoplay: props.playing,
        mute: props.mute,
        loop: props.loop,
        onend: props.onEnd,
        onplay: props.onPlay,
        onpause: props.onPause,
        onload: props.onLoad,
        onloaderror: props.onLoadError
      })
    }
  }

  /**
   * Stop, unload and destroy howler object
   */
  destroyHowler () {
    if (this.howler) {
      this.howler.off() // Remove event listener
      this.howler.stop() // Stop playback
      this.howler.unload() // Remove sound from pool
      this.howler = null // Destroy it
    }
  }

  toggleHowler (props) {
    (props.playing) ? this.play() : this.pause()
    runIfSet(props.mute, this.mute(props.mute))
    runIfSet(props.loop, this.loop(props.loop))

    if (props.seek !== this.seek()) {
      this.seek(props.seek)
    }
  }

  set howler (howl) {
    if (howl) {
      this._howler = howl
    }
  }

  get howler () {
    return this._howler
  }

  /**
   * Begins playback of a sound when not playing
   */
  play () {
    const playing = this.howler.playing()

    if (!playing) {
      this.howler.play()
    }
  }

  /**
   * Pauses playback of sound or group
   * If no id given, pauses all playback
   * @param {Number} id = undefined [sound of group to pause]
   */
  pause (id = undefined) {
    if (id) {
      this.howler.pause(id)
    } else {
      this.howler.pause()
    }
  }

  /**
   * Mutes the sound, but doesn't pause the playback.
   * @param {Boolean} [muted] [True to mute and false to unmute]
   * @param {Number} [id] [The sound ID. If none is passed, all sounds in group are muted]
   */
  mute (...args) {
    this.howler.mute(...args)
  }

  /**
   * Get/set whether to loop the sound or group. This method can optionally take 0, 1 or 2 arguments.
   * @param {Boolean} [loop] [To loop or not to loop, that is the question]
   * @param {Number} [id] [The sound ID. If none is passed, all sounds in group will have their loop property updated]
   */
  loop (...args) {
    return this.howler.loop(...args)
  }

  /**
   * Set/get current position of player
   * @param  {Number} pos [seek player to position]
   * @return {Number}     [return current position]
   */
  seek (pos = null) {
    if (!this.howler) {
      return 0
    }

    if (!pos) {
      return this.howler.seek()
    }

    if (pos) {
      this.howler.seek(pos)
      return pos
    }
  }

  /**
   * Get the duration of the audio source
   * @return {Number} [Audio length in seconds. Will return 0 until after the load event fires]
   */
  duration () {
    return this.howler.duration()
  }

  /**
   * Only render a placeholder
   */
  render () {
    return React.createElement('div', null)
  }
}

ReactHowler.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  playing: PropTypes.bool,
  mute: PropTypes.bool,
  loop: PropTypes.bool,
  onEnd: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadError: PropTypes.func
}

ReactHowler.defaultProps = {
  playing: true, // Enable autoplay by default
  mute: false,
  loop: false,
  onEnd: noop,
  onPause: noop,
  onPlay: noop,
  onLoad: noop,
  onLoadError: noop
}

export default ReactHowler
