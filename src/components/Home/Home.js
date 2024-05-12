import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import video from '../../assets/video/cabecera.mp4';
import { Waypoint } from 'react-waypoint';

const Home = () => {
  require('./Home.css');
  let [shouldPlay, updatePlayState] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  let handleEnterViewport = function() {
    updatePlayState(true);
  }
  let handleExitViewport = function() {
    updatePlayState(false);
  }

  useEffect(() => {
    updatePlayState(true);
    setPlayerReady(true);

  }, []);

  const handlePlayerReady = () => {
    setPlayerReady(true);
  };

  return (
    <div className='home'>
      <div id="container-home">
        <Waypoint 
          onEnter={handleEnterViewport}
          onLeave={handleExitViewport}
        >
          <div>
          {playerReady && (
              <ReactPlayer
                url={video}
                width='100%'
                height='100%'
                playing={shouldPlay}
                controls
                muted
                onReady={handlePlayerReady}
              />
            )}
          </div>
        </Waypoint>
      </div>
    </div>
  )
}

export default Home