import React from "react";
import ReactHowler from "ReactHowler";
import Button from "../components/Button";

class SwapSource extends React.Component {
  constructor(props) {
    super(props);

    // The two files that we'll switch between
    this.sources = [["sound.ogg", "sound.mp3"], ["sound2.ogg", "sound2.mp3"]];

    this.state = {
      currentSrcIndex: 0,
      playing: false,
    };

    this.handleSwap = this.handleSwap.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handleSwap() {
    // Just switch back and forth between 0 and 1
    let nextIndex = this.state.currentSrcIndex === 0 ? 1 : 0;
    this.setState({ currentSrcIndex: nextIndex });
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
          playing={this.state.playing}
          // When the sources are swapped we'll pass a new
          // src prop into ReactHowler which will destroy our
          // currently playing Howler.js and initialize
          // a new Howler.js instance
          src={this.sources[this.state.currentSrcIndex]}
        />
        <Button className="full" onClick={this.handleSwap}>
          Swap Source
        </Button>
        <br />
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
        <p>
          Currently playing{" "}
          {this.sources[this.state.currentSrcIndex][0] + "/mp3"}
        </p>
      </div>
    );
  }
}

export default SwapSource;
