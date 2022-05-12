import React from 'react'
import ReactPlayer from 'react-player';
import './About.css';
import video from '../../assets/video/video.mp4';
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div className='about'>
      <Slide right>
      <div className='knowme'>
      <div>Conoce un poco más sobre <b>mi historia</b></div>
      <div>y cómo puedo <b>ayudarte</b> desde mi experiencia</div>
      <div>a conseguir tus <b>objetivos!</b></div>
      </div>
      <ReactPlayer controls className='video'
      url={video}  
      />
      </Slide>
    </div>
  )
}

export default About