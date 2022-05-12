import React from 'react'
import './IconsBar.css'
import icon1 from '../../assets/Dietitian2.png';
import icon2 from '../../assets/Exercising2.png';
import icon3 from '../../assets/Money2.png';
import Fade from 'react-reveal/Fade';

const IconsBar = () => {
  return (
    <div className='container-icons'>
    <div className='container-icon1'>
    <Fade left>
      <div className="txt-icon1">
        <div className='txticon1'>Nos preocupamos en adaptar la <b>dieta a tu gusto</b>.</div>
        <div className='txticon1'>Comer no tiene porqué ser una guerra constante,</div>
        <div className='txticon1'>se puede <b>disfrutar de una alimentación variada</b></div>
        <div className='txticon1'>sin preocuparse por el peso y disfrutando a la vez.</div>
      </div>
      </Fade>
      <Fade bottom>
        <div className="img-icon1">
          <img src={icon1} alt="Icon diet"/>
        </div>
      </Fade>
  </div>
  <div className='container-icon2'>
    <Fade bottom>
      <div className="img-icon2">
          <img src={icon2} alt="Icon train"/>
      </div>
    </Fade>
    <Fade right>
      <div className="txt-icon2">
        <div className='txticon2'>Lo importante es entrenar, no dónde.</div>
        <div className='txticon2'><b>Adaptamos tu plan</b> al material que dispongas,</div>
        <div className='txticon2'>podrás entrenar tanto <b>en casa</b> como <b>en el gimnasio</b>.</div>
      </div>
    </Fade>
  </div>
  <div className='container-icon3'>
    <Fade left>
      <div className="txt-icon3">
        <div className='txticon3'>Mejorar está <b>al alcance de todo el mundo</b>.</div>
        <div className='txticon3'>Nuestros planes se adaptan a tu bolsillo,</div>
        <div className='txticon3'>elige cuál se ajusta mejor a tus necesidades</div>
        <div className='txticon3'>por un <b>precio más que asequible</b>.</div>
      </div>
      </Fade>
      <Fade bottom>
        <div className="img-icon3">
          <img src={icon3} alt="Icon money"/>
        </div>
    </Fade>
  </div>
  </div>
  )
}

export default IconsBar