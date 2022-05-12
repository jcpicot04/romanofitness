import React from 'react';
import youtube from '../../assets/socialmedia/youtube.svg';
import tiktok from '../../assets/socialmedia/tiktok.svg';
import instagram from '../../assets/socialmedia/instagram.svg';

const BottomBar = () => {

  require('./BottomBar.css');

  return (
    <footer  className="site-footer" role="contentinfo">
  <div className="social-wrapper">
    <ul>
      <li>
        <a href="https://www.instagram.com/romano_fitness/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram Logo" className="instagram-icon"/></a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCJLImUXZ5JnD-rCFPTpNCwQ" target="_blank" rel="noreferrer">
          <img src={youtube} alt="Youtube Logo" className="youtube-icon"/></a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@romanofitness?lang=es" target="_blank" rel="noreferrer">
          <img src={tiktok} alt="Tiktok Logo" className="tiktok-icon"/></a>
      </li>
    </ul>
  </div>

  <nav className="footer-nav" role="navigation">
    <p>Copyright © 2022 - ROMANOFITNESS. All rights reserved.</p>
  </nav>
</footer>
  )
}

export default BottomBar