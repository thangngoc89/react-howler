import { Component } from "react";
import PropTypes from "prop-types";
import { Howler, Howl } from "howler";

import { noop } from "./utils";

if (typeof window !== 'undefined') {
  window.Howler = Howler;
}

class ReactHowler extends Component {

  state = {
    isLocked: Howler.state === "suspended",
  };

  componentDidMount () {
    this.initHowler(this.props)
    this.props.onLock(this.state.isLocked);
  }

  componentDidUpdate (prevProps) {
    // The src prop must be either a string or an array of strings
    // Because of this, we can use it's JSON representation to check for changes
    if (JSON.stringify(prevProps.src) !== JSON.stringify(this.props.src)) {
      this.initHowler(this.props)
    } else {
      this.toggleHowler(prevProps)
    }
  }

  componentWillUnmount () {
    this.destroyHowler()
  }

  /**
   * Create howler object with given props
   */
  initHowler(props) {
    this.destroyHowler();
    this.howler = new Howl({
      src: props.src,
      xhr: props.xhr,
      format: props.format,
      mute: props.mute,
      loop: props.loop,
      preload: props.preload,
      volume: props.volume,
      onend: props.onEnd,
      onplay: props.onPlay,
      onpause: props.onPause,
      onvolume: props.onVolume,
      onunlock: this.onUnlock,
      onstop: props.onStop,
      onload: props.onLoad,
      onloaderror: props.onLoadError,
      html5: props.html5,
    });

    if (props.playing) {
      this.play();
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

  toggleHowler (prevProps) {
    (this.props.playing) ? this.play() : this.pause()
    this.loop(this.props.loop)

    if (prevProps.mute !== this.props.mute) {
      this.mute(this.props.mute)
    }

    if (prevProps.volume !== this.props.volume) {
      this.volume(this.props.volume)
    }

    if (this.props.preload && this.howlerState() === 'unloaded') {
      this.load()
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

  get isLocked () {
    return this.state.isLocked;
  }

  onUnlock = () => {
    this.setState({ isLocked: false });
    this.props.onLock(false);
  }

  /**
   * Begins playback of a sound when not playing
   */
  play() {
    const playing = this.howler.playing()

    if (!playing) {
      // Automatically load if we're trying to play
      // and the howl is not loaded
      if (this.howlerState() === 'unloaded') {
        this.load()
      }

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
   * Check the load status of the Howl
   * @return {String} [unloaded, loading or loaded]
   */
  howlerState () {
    return this.howler.state()
  }

  /**
   * Stops playback of sound or group
   * If no id given, stops all playback
   * @param {Number} id = undefined [sound of group to pause]
   */
  stop (id = undefined) {
    if (id) {
      this.howler.stop(id)
    } else {
      this.howler.stop()
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
   * Get/set volume of this sound or the group. This method optionally takes 0, 1 or 2 arguments.
   * @param {Number} [volume] [Volume from 0.0 to 1.0]
   * @param {Number} [id] [The sound ID. If none is passed, all sounds in group are muted]
   */
  volume (...args) {
    return this.howler.volume(...args)
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

    if (!pos && pos !== 0) {
      return this.howler.seek()
    }

    if (pos || pos === 0) {
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
   * load audio file
   */
  load () {
    this.howler.load()
  }

  render () {
    return React.createElement('div', null)
  }
}

ReactHowler.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  format: PropTypes.arrayOf(PropTypes.string),
  xhr: PropTypes.object,
  playing: PropTypes.bool,
  mute: PropTypes.bool,
  loop: PropTypes.bool,
  preload: PropTypes.bool,
  volume: PropTypes.number,
  onEnd: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  onVolume: PropTypes.func,
  onStop: PropTypes.func,
  onLoad: PropTypes.func,
  onLock: PropTypes.func,
  onLoadError: PropTypes.func,
  html5: PropTypes.bool
}

ReactHowler.defaultProps = {
  playing: true, // Enable autoplay by default
  format: [],
  xhr: {},
  mute: false,
  preload: true,
  loop: false,
  volume: 1.0,
  onEnd: noop,
  onPause: noop,
  onPlay: noop,
  onVolume: noop,
  onStop: noop,
  onLoad: noop,
  onLock: noop,
  onLoadError: noop,
  html5: false
}

export default ReactHowler
