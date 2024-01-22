import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";


  const ImageSwiper = ({ images, handleBidModal,swiperOptions }) => {
    const customStyles = {
      width: '50%', // Ancho máximo del contenedor
      height: 'auto', // Altura ajustada automáticamente

    };
  
    return (
      <Swiper {...swiperOptions} className="swiper-container">
        <div className="swiper-wrapper">
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="tf-card-box style-7">
                <div className="card-media">
                  <Link href="#">
                    <img src={imageUrl} alt={`Image ${index}`} style={customStyles} />
                  </Link>
                </div>
                <div className="button-place-bid">
                  <a onClick={handleBidModal} href="#" className="tf-button">
                    <span>Unete</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    );
  };
  
  export default ImageSwiper;
  
