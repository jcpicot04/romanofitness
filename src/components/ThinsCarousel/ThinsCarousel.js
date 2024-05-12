import React, {useState} from 'react';
import testimonio1 from '../../assets/cambios/Testimonio1.mp4';
import testimonio1_img from '../../assets/cambios/testimonio1.png';
import testimonio2 from '../../assets/cambios/Testimonio2.mp4';
import testimonio2_img from '../../assets/cambios/testimonio2.png';
import testimonio3 from '../../assets/cambios/Testimonio3.mp4';
import testimonio3_img from '../../assets/cambios/testimonio3.png';
import testimonio4 from '../../assets/cambios/Testimonio4.mp4';
import testimonio4_img from '../../assets/cambios/testimonio4.png';
import testimonio5 from '../../assets/cambios/Testimonio5.mp4';
import testimonio5_img from '../../assets/cambios/testimonio5.png';
import testimonio6 from '../../assets/cambios/Testimonio6.mp4';
import testimonio6_img from '../../assets/cambios/testimonio6.png';
import testimonio7 from '../../assets/cambios/Testimonio7.mp4';
import testimonio7_img from '../../assets/cambios/testimonio7.png';
import testimonio8 from '../../assets/cambios/Testimonio8.mp4';
import testimonio8_img from '../../assets/cambios/testimonio8.png';
import testimonio9 from '../../assets/cambios/Testimonio9.mp4';
import testimonio9_img from '../../assets/cambios/testimonio9.png';
import testimonio10 from '../../assets/cambios/Testimonio10.mp4';
import testimonio10_img from '../../assets/cambios/testimonio10.png';
import testimonio11 from '../../assets/cambios/Testimonio11.mp4';
import testimonio11_img from '../../assets/cambios/testimonio11.png';
import testimonio12 from '../../assets/cambios/Testimonio12.mp4';
import testimonio12_img from '../../assets/cambios/testimonio12.png';
import ReactPlayer from 'react-player';
import './ThinsCarousel.css';

const Video = ({ src, img }) => {
    const [playing, setPlaying] = useState(false);
  
    const togglePlay = () => {
      setPlaying(!playing);
    };
  
    return (
      <div className="video" onClick={togglePlay}>
        {playing ? (
            <ReactPlayer
                url={src}
                width='100%'
                height='100%'
                controls
                playing
        />
        ) : (
          <img src={img} alt="Play Button" />
        )}
      </div>
    );
  };

const ThinsCarousel =()=> {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className='thins'>
                <div className='results'>
                    <div>Muchos de nuestros clientes</div>
                    <div>ya han experimentado un cambio de vida.</div>
                    <div>¡NO DUDES EN SER EL SIGUIENTE!</div>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <Video src={testimonio1} img={testimonio1_img}/>
                    </div>
                    <div className="grid-item">
                        <Video src={testimonio2} img={testimonio2_img}/>
                    </div>
                    <div className="grid-item">
                        <Video src={testimonio3} img={testimonio3_img}/>
                    </div>
                    <div className="grid-item">
                        <Video src={testimonio4} img={testimonio4_img}/>
                    </div>
                </div>
                {showAll &&                 
                    <div className="grid-container">
                        <div className="grid-item">
                            <Video src={testimonio5} img={testimonio5_img}/>
                        </div>
                        <div className="grid-item">
                            <Video src={testimonio6} img={testimonio6_img}/>
                        </div>
                        <div className="grid-item">
                            <Video src={testimonio7} img={testimonio7_img}/>
                        </div>
                        <div className="grid-item">
                            <Video src={testimonio8} img={testimonio8_img}/>
                        </div>
                        <div className="grid-item">
                            <Video src={testimonio9} img={testimonio9_img}/>
                        </div>
                        <div className="grid-item">
                            <Video src={testimonio10} img={testimonio10_img}/>
                        </div>
                        <div className="grid-item">
                            <Video src={testimonio11} img={testimonio11_img}/>
                        </div>
                        <div className="grid-item">
                            <Video src={testimonio12} img={testimonio12_img}/>
                        </div>
                    </div>
                }
                <button className="ver-mas-btn" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Ver Menos' : 'Ver Más'}
                </button>
        </div>
    )
}

export default ThinsCarousel