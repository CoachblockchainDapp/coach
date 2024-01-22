import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link"
import styles from './SlideComponent1.module.css'; // Importar el archivo CSS con estilos locales

const SlideComponent1 = ({ slideData, swiperOptions,timerx,handleBidModal }) =>  {

  const Slide = ({ slide }) => {
    // Ahora puedes extraer la información de slide
const { image, link, productInfo: { name, price } } = slide;
    return (
      <SwiperSlide className={styles['swiper-slide']}>
      
            <div className="tf-card-box">
                <div className="card-media">
                    <Link href={link}>
                        <img src={image} alt="" />
                    </Link>
                    <span className="wishlist-button icon-heart" />
                    <div className="featured-countdown">
                        {timerx}
                    </div>
                    <div className="button-place-bid">
                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Unete</span></a>
                    </div>
                </div>
                <div className="meta-info text-center">
                    <h5 className="name"><Link href={link}>{name}</Link></h5>
                    <h6 className="price gem"><i className="icon-gem" />{price}</h6>
                </div>
            </div>
            
        </SwiperSlide>
    );
};

if (!Array.isArray(slideData)) {
    return <p>Error: Slide data is not an array</p>;
}

return (
  <Swiper {...swiperOptions} className="swiper swiper-3d-7 swiper-container-horizontal">
      <div className={styles['swiper']}>
        {slideData.map((slide, index) => (
            <Slide key={index} slide={slide} />
        ))}
        </div>
        <div className="swiper-pagination pagination-number" />
    </Swiper>
);
};
export default SlideComponent1;
