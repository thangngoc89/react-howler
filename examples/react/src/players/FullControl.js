import React,{useState,useEffect} from 'react'
import ReactHowler from 'ReactHowler'
import raf from 'raf' // requestAnimationFrame polyfill
import Button from '../components/Button'

const FullControl = () => {
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [loop, setLoop] = useState(false)
  const [mute, setMute] = useState(false)
  const [volume, setVolume] = useState(1.0)

  useEffect(() => {
    clearRAF()
  }, [])

  const handleToggle = () => {
    setPlaying(!playing)
  }

  const handleOnLoad = () => {
    setLoaded(true)
    //duration = player.duration()
  }

  const handleOnPlay = () => {
    setPlaying(true)
    renderSeekPos()
  }

  const handleOnEnd = () => {
    setPlaying(false)

    clearRAF()
  }

  const handleStop = () => {
    player.stop()
    setPlaying(false) // Need to update our local state so we don't immediately invoke autoplay

    renderSeekPos()
  }

  function handleLoopToggle() {
    setLoop(!loop)
  }

  const handleMuteToggle = () => {
    setMute(!mute)
  }

  const renderSeekPos = () => {
    // setSeek player.seek(),

    if (playing) {
      _raf = raf(renderSeekPos)
    }
  }

  function clearRAF() {
    raf.cancel(_raf)
  }

  return (
    <div className="full-control">
      <ReactHowler
        src={["sound.ogg", "sound.mp3"]}
        playing={playing}
        onLoad={handleOnLoad}
        onPlay={handleOnPlay}
        onEnd={handleOnEnd}
        loop={loop}
        mute={mute}
        volume={volume}
        ref={ref => (player = ref)}
      />

      <p>{loaded ? "Loaded" : "Loading"}</p>

      <div className="toggles">
        <label>
          Loop:
          <input type="checkbox" checked={loop} onChange={handleLoopToggle} />
        </label>
        <label>
          Mute:
          <input type="checkbox" checked={mute} onChange={handleMuteToggle} />
        </label>
      </div>

      <p>
        {"Status: "}
        {seek !== undefined ? seek.toFixed(2) : "0.00"}
        {" / "}
        {duration ? duration.toFixed(2) : "NaN"}
      </p>

      <div className="volume">
        <label>
          Volume:
          <span className="slider-container">
            <input
              type="range"
              min="0"
              max="1"
              step=".05"
              value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              style={{ verticalAlign: "bottom" }}
            />
          </span>
          {volume.toFixed(2)}
        </label>
         <Button onClick={handleToggle}>
          {(playing) ? 'Pause' : 'Play'}
        </Button>
        <Button onClick={handleStop}>
          Stop
        </Button>
      </div>
      </div>

    )
  }

export default FullControl
