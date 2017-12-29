import React from "react";
import ReactHowler from "ReactHowler";
import Button from "../components/Button";

class OnlyPlayPauseButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true,
    });
  }

  handlePause() {
    this.setState({
      playing: false,
    });
  }

  render() {
    return (
      <div>
        <ReactHowler
          src={["sound.ogg", "sound.mp3"]}
          playing={this.state.playing}
        />
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
      </div>
    );
  }
}

export default OnlyPlayPauseButton;
