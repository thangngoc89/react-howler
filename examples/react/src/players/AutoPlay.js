import React from 'react'
import ReactHowler from 'ReactHowler'
import Button from '../components/Button'

class AutoPlay extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      initialized: false,
      playing: true
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
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
    if (this.state.initialized === true) {
      return (
        <div>
          <ReactHowler
            src={['sound.ogg', 'sound.mp3']}
            playing={this.state.playing}
          />
          <Button onClick={this.handlePlay}>Play</Button>
          <Button onClick={this.handlePause}>Pause</Button>
        </div>
      )
    } else {
      return (
        <div>
          <Button
            className='full'
            onClick={e => this.setState({ initialized: true })}
          >
            Initialize Auto Player
          </Button>
        </div>
      )
    }
  }
}

export default AutoPlay
