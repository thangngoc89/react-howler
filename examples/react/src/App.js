import React from 'react'
import { OnlyPlayPauseButton, NoPreload, SwapSource, AutoPlay, FullControl } from './players'

class App extends React.Component {
  render () {
    return (
      <div>
        <section>
          <h1>Global Howler object</h1>
          <p>usingWebAudio: {(window.Howler.usingWebAudio) ? 'true' : 'false'}</p>
          <hr />
        </section>
        <section>
          <h1>Simple player, only play/pause button</h1>
          <OnlyPlayPauseButton />
          <hr />
        </section>
        <section>
          <h1>Preload Disabled</h1>
          <p>(Check network requests for sound2.ogg to verify)</p>
          <NoPreload />
          <hr />
        </section>
        <section>
          <h1>Swap Source</h1>
          <SwapSource />
          <hr />
        </section>
        <section>
          <h1>AutoPlay</h1>
          <AutoPlay />
          <hr />
        </section>
        <section>
          <h1>Full Control</h1>
          <FullControl />
          <hr />
        </section>
      </div>
    )
  }
}

export default App
