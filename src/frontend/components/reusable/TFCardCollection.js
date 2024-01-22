// TFCardCollection.js

import React from 'react';
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './TFCardCollection.module.css'; // Importa los estilos CSS del archivo TFCardCollection.module.css


const TFCard = ({ data }) => {
    return (
       
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className="tf-card-collection style-2" key={index}>
            <Link href={item.authorLink}>
              <div className="media-images-collection">
                <img src={item.imageUrl} alt="" />
                <div className="img-bottom">
                  <img src={item.imgBottom1} alt="" />
                  <img src={item.imgBottom2} alt="" />
                  <img src={item.imgBottom3} alt="" />
                  <img src={item.imgBottom4} alt="" />
                </div>
              </div>
            </Link>
            <div className="card-bottom">
              <div className="author">
                <h5><Link href={item.authorLink}>{item.authorName}</Link></h5>
                <div className="infor">{item.authorInfo}</div>
              </div>
              <div className="bottom-right">
                <div className="shop">
                  <div className="icon">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p>{item.itemCount} Item</p>
                </div>
                <div className="like">
                  <span className="wishlist-button icon-heart" />
                  <p>{item.likeCount} like</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    );
  };
  
  



const TFCardCollection = ({ swiperOptions, data }) => {
    return (
      <Swiper {...swiperOptions} className="featured pt-10 swiper-container carousel3">
        <div className="swiper-wrapper">
        <TFCard data={data} />
        
        </div>
      </Swiper>
    );
  };
  
  export default TFCardCollection;
