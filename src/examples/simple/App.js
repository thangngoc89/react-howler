import React from 'react'
/* eslint-disable */
import { OnlyPlayPauseButton, AutoPlay, FullControl } from './players'
/* eslint-enable */
import { Howler } from 'react-howler'

class App extends React.Component {
  render () {
    return (
      <div>
        <section>
          <h1>Global Howler object</h1>
          <p>usingWebAudio: {(Howler.usingWebAudio) ? 'true' : 'false'}</p>
          <hr />
        </section>
        <section>
          <h1>Simple player, only play/pause button</h1>
          <OnlyPlayPauseButton />
          <hr />
        </section>

        {/*
        <section>
          <h1>AutoPlay</h1>
          <AutoPlay />
          <hr />
        </section>
        */}

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
