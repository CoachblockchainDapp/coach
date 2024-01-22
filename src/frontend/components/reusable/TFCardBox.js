
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';

export const TFCardBox = ({  handleBidModal,swiperOptions  }) => {
    return (
        <div className="relative">
        <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
            <div className="swiper-wrapper">
                <SwiperSlide>
                    <div className="tf-card-box style-7">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/about-us-03.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="button-place-bid">
                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Unete</span></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box style-7">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="button-place-bid">
                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box style-7">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/about-us-02.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="button-place-bid">
                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box style-7">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="button-place-bid">
                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    </div>
    );
};

export default TFCardBox 
