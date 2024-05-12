import React, { useState} from 'react'
import './About.css';
import uno from '../../assets/historia/1.jpeg';
import dos from '../../assets/historia/2.jpeg';
import tres from '../../assets/historia/3.jpeg';
import cuatro from '../../assets/historia/4.mp4';
import cinco from '../../assets/historia/5.jpeg';
import seis from '../../assets/historia/6.jpeg';
import siete from '../../assets/historia/7.jpeg';
import ocho from '../../assets/historia/8.mp4';
import nueve from '../../assets/historia/9.jpeg';
import diez from '../../assets/historia/10.mp4';
import once from '../../assets/historia/11.jpeg';
import doce from '../../assets/historia/12.mp4';
import trece from '../../assets/historia/13.mp4';
import catorce from '../../assets/historia/14.jpeg';
import quinze from '../../assets/historia/15.mp4';
import dieciseis from '../../assets/historia/16.mp4';
import diecisiete from '../../assets/historia/17.mp4';
import dieciocho from '../../assets/historia/18.jpeg';
import diecinueve from '../../assets/historia/19.mp4';
import veinte from '../../assets/historia/20.jpeg';
import Slide from 'react-reveal/Slide';
import Stories from 'react-insta-stories';

const About = () => {

  const [viewStory, setViewStory] = useState(false);

  const handleClick = () => {
    setViewStory(true);
  };

  const slides = [
    {
      url: uno
    },
    {
      url: dos
    },
    {
      url: tres
    },
    {
      url: cuatro,
      type: 'video'
    },
    {
      url: cinco
    },
    {
      url: seis
    },
    {
      url: siete
    },
    {
      url: ocho,
      type: 'video'
    },
    {
      url: nueve
    },
    {
      url: diez,
      type: 'video'
    },
    {
      url: once
    },
    {
      url: doce,
      type: 'video'
    },
    {
      url: trece,
      type: 'video'
    },
    {
      url: catorce
    },
    {
      url: quinze,
      type: 'video'
    },
    {
      url: dieciseis,
      type: 'video'
    },
    {
      url: diecisiete,
      type: 'video'
    },
    {
      url: dieciocho
    },
    {
      url: diecinueve,
      type: 'video'
    },
    {
      url: veinte
    }
  ];

  return (
    <div className='about'>
      <Slide right>
        <div className='knowme'>
          <div>CONOCE UN POCO MAS SOBRE <b>MI HISTORIA</b></div>
          <div>¡Y cómo puedo <b>ayudarte</b>, desde mi experiencia,</div>
          <div>a conseguir tus <b>objetivos!</b></div>
        </div>
        <div className='video-knowme'>
          { !viewStory &&
          <div className="image-container" onClick={handleClick}>
            <img className="blurry-image" src={uno} alt="Historia"/>
            <div className="text-overlay">
              <h2>CLICK PARA VER</h2>
            </div>
          </div>}
          {viewStory &&
          <Stories
              width={400}
              height='100%'
              stories={slides}
              defaultInterval={5000}
              preloadCount={3}
          />}
        </div>
      </Slide>
    </div>
  )
}

export default About