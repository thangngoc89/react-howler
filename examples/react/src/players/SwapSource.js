import React from 'react'
import ReactHowler from 'ReactHowler'

class SwapSource extends React.Component {
  constructor (props) {
    super(props)

    // The two files that we'll switch between
    this.sources = ['sound.ogg', 'sound2.ogg']

    this.state = {
      currentSrcIndex: 0,
      playing: false
    }

    this.handleSwap = this.handleSwap.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handleSwap () {
    // Just switch back and forth between 0 and 1
    let nextIndex = this.state.currentSrcIndex === 0 ? 1 : 0
    this.setState({currentSrcIndex: nextIndex})
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
          playing={this.state.playing}
          // When the sources are swapped we'll pass a new
          // src prop into ReactHowler which will destroy our
          // currently playing Howler.js and initialize
          // a new Howler.js instance
          src={this.sources[this.state.currentSrcIndex]}
        />
        Currently playing {this.sources[this.state.currentSrcIndex]}
        <br />
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
        <button onClick={this.handleSwap}>Swap Source</button>
      </div>
    )
  }
}

export default SwapSource
