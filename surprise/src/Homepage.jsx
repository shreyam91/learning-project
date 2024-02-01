import {Link} from 'react-router-dom'
import { useState } from 'react'

import backgroundd from '../src/assets/backgroundd.mp4'
import welcome from '../src/assets/welcome.png'
import start from '../src/assets/start.png'
import cute from '../src/assets/cute.mp3'


const Homepage = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  }
  return (
    <>
        <video autoPlay loop muted id='video'>
          <source src={backgroundd} type='video/mp4' />
        </video>
{/* 
        <audio  audio controls id = "audioPlayer">
          <source src={cute} type='audio/mpeg'/>
          Audio file not loaded yet....
        </audio> */}
        {/* <button className='playPauseButton' onClick={handlePlayPause} style={{position:'fixed',top:'10px', right:'10px'}}>{isPlaying? 'Pause':'Play'} </button> */}

      <div className='container'>
          <div className='centered-content'>
              <Link to='/level'>
                <button className='center-button'>
                  <img src={start} className='h-[200px] w-[200px]' />
                </button>
              </Link>
          </div>

          <div className='image-container'>
            <img src={welcome} className='bottom-right-image opacity-[90%]' />
          </div>
      </div>

    </>
  )
}

export default Homepage
