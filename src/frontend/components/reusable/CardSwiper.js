import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Countdown from '../elements/Countdown'

const CardSwiper = ({ slideData, handleBidModal, currentTime,swiperOptions }) => {
  return (
    <Swiper {...swiperOptions}>
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link to="#">
                <img src={slide.image} alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
              <div className="featured-countdown">
                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
              </div>
              <div className="button-place-bid">
                <a onClick={handleBidModal} to="#" className="tf-button"><span>Únete</span></a>
              </div>
            </div>
            <h5 className="name"><Link to="#">{slide.productInfo.name}</Link></h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img src={slide.author.avatar} alt="Image" />
              </div>
              <div className="info">
                <span>Creado Por:</span>
                <h6><Link to={slide.author.link}>{slide.author.name}</Link></h6>
              </div>
            </div>
            <div className="divider" />
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
