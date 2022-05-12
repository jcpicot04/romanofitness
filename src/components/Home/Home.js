import React, { useEffect } from 'react'
import { Link } from 'react-scroll';

const Home = () => {
  require('./Home.css');
  
  const scrollView = () => {
    var elmntToView = document.getElementsByClassName("about")[0];
    elmntToView.scrollIntoView({behavior: "smooth"}); 
  }

  return (
    <div className='home'>
      <div id="container-home">
        Disfrutar
        <div id="flip-home">
          <div><div id="flipped">comiendo</div></div>
          <div><div id="flipped">entrenando</div></div>
          <div><div id="flipped">viviendo</div></div>
        </div>
        no está tan lejos!
      </div>
      <div onClick={scrollView} class="arrow bounce"></div>
      </div>
  )
}

export default Home