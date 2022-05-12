import React from 'react';
import cambio1 from '../../assets/cambios/cambio1.png';
import cambio2 from '../../assets/cambios/cambio2.png';
import cambio3 from '../../assets/cambios/cambio3.png';
import cambio4 from '../../assets/cambios/cambio4.png';
import cambio5 from '../../assets/cambios/cambio5.png';
import './ThinsCarousel.css';
import Slide from 'react-reveal/Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



const ThinsCarousel =()=> {
    let data= [
        {
            id: 1,
            imgSrc: cambio1,
        },
        {
            id: 2,
            imgSrc: cambio2,
        },
        {
            id: 3,
            imgSrc: cambio3,
        },
        {
            id: 4,
            imgSrc: cambio4,
        },
        {
            id: 5,
            imgSrc: cambio5,
        }

    ]
    return (
      <div className='carousel'>
          <Slide left>
        <div className='swiper-cont'>
        <Swiper
            className='swiper'
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            style={{
                width: '850px',
                height: '825px',
                borderRadius: '20px'
            }}
        >
            {data.map((item, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <img src={item.imgSrc} style={{ width: '100%', borderRadius: '20px'}} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
        <div className='results'>
        <div>Muchos de nuestros clientes</div>
        <div>ya han experimentado un cambio de vida.</div>
        <div>No dudes en ser el siguiente!</div>
        </div>
        </Slide>
        </div>
    )
}

export default ThinsCarousel