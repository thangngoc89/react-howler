import React from 'react'
import ReactHowler from 'ReactHowler'

class NoPreload extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loadState: 'unloaded',
      playing: false
    }
    this.player = null
    this.handleLoad = this.handleLoad.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  // This isn't required but you can use it if you want to
  // If you don't call load(), the audio will be automatically
  // loaded when you set the playing prop to true
  handleLoad () {
    this.player.load()
  }

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }

  render () {
    return (
      <div>
        <ReactHowler
          preload={false}
          ref={(ref) => (this.player = ref)}
          src='sound2.ogg'
          playing={this.state.playing}
          onLoad={() => this.setState({loadState: this.player.howlerState()})}
        />
        {this.state.loadState === 'unloaded' &&
          <button onClick={this.handleLoad}>Load (Optional)</button>
        }
        <br />
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    )
  }
}

export default NoPreload
