import Audio from 'react-howler'
import React from 'react'
import sound from 'sound.ogg'
import raf from 'raf' // requestAnimationFrame polyfill

class AutoPlay extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      loaded: false,
      loop: false,
      mute: false,
      volume: 1.0
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.renderSeekPos = this.renderSeekPos.bind(this)
    this.handleLoopToggle = this.handleLoopToggle.bind(this)
    this.handleMuteToggle = this.handleMuteToggle.bind(this)
  }

  componentWillUnmount () {
    this.clearRAF()
  }

  handleToggle () {
    this.setState({
      playing: !this.state.playing
    })
  }

  handleOnLoad () {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    })
  }

  handleOnPlay () {
    this.setState({
      playing: true
    })
    this.renderSeekPos()
  }

  handleOnEnd () {
    this.setState({
      playing: false
    })
    this.clearRAF()
  }

  handleStop () {
    this.player.stop()
    this.setState({
      playing: false // Need to update our local state so we don't immediately invoke autoplay
    })
    this.renderSeekPos()
  }

  handleLoopToggle () {
    this.setState({
      loop: !this.state.loop
    })
  }

  handleMuteToggle () {
    this.setState({
      mute: !this.state.mute
    })
  }

  renderSeekPos () {
    this.setState({
      seek: this.player.seek()
    })
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  clearRAF () {
    raf.cancel(this._raf)
  }

  render () {
    return (
      <div>
        <Audio
          src={sound}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.volume}
          ref={(ref) => this.player = ref}
        />
        <button onClick={this.handleToggle}>
          {(this.state.playing) ? 'Pause' : 'Play' }
        </button>
        <button onClick={this.handleStop}>
          Stop
        </button>
        <p>{(this.state.loaded) ? 'Loaded' : 'Loading'}</p>
        <p>
          {'Status: '}
          {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : 'NaN'}
          {' / '}
          {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
        </p>
        <label>
          Loop:
            <input
              type='checkbox'
              checked={this.state.loop}
              onChange={this.handleLoopToggle}
            />
        </label>
        <label>
          Mute:
            <input
              type='checkbox'
              checked={this.state.mute}
              onChange={this.handleMuteToggle}
            />
        </label>
        <div>
          <label>
            <input
              type='range'
              min='0'
              max='1'
              step='.05'
              value={this.state.volume}
              onChange={e => this.setState({volume: parseFloat(e.target.value)})}
            />
            <br /> Volume: {this.state.volume}
          </label>
        </div>

      </div>
    )
  }
}

export default AutoPlay
