import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';

const CardBox = ({ imageSrc, width, height, onClick }) => (
  <div className="tf-card-box style-7">
    <div className="card-media">
      <Link href="#">
      <img src={imageSrc} alt="" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px' }} />
      </Link>
    </div>
    <div className="button-place-bid">
      <a onClick={onClick} href="#" className="tf-button"><span>Únete</span></a>
    </div>
  </div>
);

const ImageCarousel = ({ items, onBidClick, swiperOptions }) => (
  <div className="relative">
    <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
      <div className="swiper-wrapper" style={{ margin: '-100px' }}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <CardBox {...item} onClick={onBidClick} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  </div>
);

const SlideAbout = ({ carouselItems, onBidClick, swiperOptions }) => {
  return (
    <ImageCarousel items={carouselItems} onBidClick={onBidClick} swiperOptions={swiperOptions} />
  );
};

export default SlideAbout;

