import React from 'react'
import ReactHowler from 'ReactHowler'
import Button from '../components/Button'

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
          src={['sound2.ogg', 'sound2.mp3']}
          playing={this.state.playing}
          onLoad={() => this.setState({loadState: this.player.howlerState()})}
        />
        {this.state.loadState === 'unloaded' &&
          <Button className='full' onClick={this.handleLoad}>Load (Optional)</Button>
        }
        <br />
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
      </div>
    )
  }
}

export default NoPreload
