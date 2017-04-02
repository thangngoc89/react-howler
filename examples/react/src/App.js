import React from 'react'
import SourceLink from './components/SourceLink'
import { OnlyPlayPauseButton, NoPreload, SwapSource, AutoPlay, FullControl } from './players'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1 className='title'>ReactHowler.js</h1>
        <a href='https://github.com/thangngoc89/react-howler' className='github-btn' />
        <div className='players'>
          <section>
            <h1>Simple Player</h1>
            <p className='subheading'>Only play/pause button</p>
            <OnlyPlayPauseButton />
            <SourceLink fileName='OnlyPlayPauseButton' />
          </section>
          <section>
            <h1>AutoPlay</h1>
            <AutoPlay />
            <SourceLink fileName='AutoPlay' />
          </section>
          <section>
            <h1>Preload Disabled</h1>
            <p className='subheading'>(Check network requests for sound2.ogg)</p>
            <NoPreload />
            <SourceLink fileName='NoPreload' />
          </section>
          <section>
            <h1>Swap Source</h1>
            <SwapSource />
            <SourceLink fileName='SwapSource' />
          </section>
          <section>
            <h1>Full Control</h1>
            <FullControl />
            <SourceLink fileName='FullControl' />
          </section>
          <section>
            <h1>Global Howler Object</h1>
            <p>usingWebAudio: {(window.Howler.usingWebAudio) ? 'true' : 'false'}</p>
            <pre>window.Howler.usingWebAudio</pre>
          </section>
        </div>
      </div>
    )
  }
}

export default App
