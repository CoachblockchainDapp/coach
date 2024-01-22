import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const SellerSwiperSlide = ({ slides, swiperOptions }) => {
  const renderSwiperSlides = (slides) => {
    return slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="tf-author-box text-center">
          <div className="author-avatar">
            <img src={slide.avatar} alt="" className="avatar" />
            <div className="number">{index + 1}</div>
          </div>

          <div className="author-infor">
            <h5 style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>
              {slide.name}


            </h5>
            <h6 style={{ color: '#fff' }}>{slide.price} USDT</h6>
          </div>


        </div>
      </SwiperSlide>
    ));
  };

  return (
    <Swiper className="swiper-container seller seller-slider2" {...swiperOptions}>
      <div className="swiper-wrapper">
        {renderSwiperSlides(slides)}
      </div>
    </Swiper>
  );
};

export default SellerSwiperSlide;



