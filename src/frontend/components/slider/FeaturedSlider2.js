
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import {nameE,price} from "../../util/constants"
import CardSwiper from "../reusable/CardSwiper"


const nameEuthor='Coach Bloackchain'
const aqua= '/assets/images/avatar/AER.png' 
const slideData = [
    {
      image: "/assets/images/box-item/img-collection-br02.jpg",
      productInfo: {
        name: nameE,
        price: price,
      },
      author: {
        avatar: aqua,
        link: "/author-1",
        name: nameEuthor,
      },
    },
    {
      image: "/assets/images/box-item/img-collection-br04.jpg",
      productInfo: {
        name: nameE,
        price: price,
      },
      author: {
        avatar: aqua,
        link: "/author-2",
        name: nameEuthor,
      },
    },
    {
        image: "/assets/images/box-item/img-collection-bl03.jpg",
        productInfo: {
          name: nameE,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameEuthor,
        },
      },
      {
        image: "/assets/images/box-item/img-collection-bl04.jpg",
        productInfo: {
          name: nameE,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-1",
          name: nameEuthor,
        },
      },
      {
        image: "/assets/images/box-item/imgslider1category.jpg",
        productInfo: {
          name: nameE,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameEuthor,
        },
      },
      {
        image: "/assets/images/box-item/collection-3.jpg",
        productInfo: {
          name: nameE,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameEuthor,
        },
      },
      {
        image: "/assets/images/box-item/product-03.jpg",
        productInfo: {
          name: nameE,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameEuthor,
        },
      },
      {
        image: "/assets/images/box-item/about-us-01.jpg",
        productInfo: {
          name: nameE,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameEuthor,
        },
      },
      {
        image: "/assets/images/box-item/banner-01.jpg",
        productInfo: {
          name: nameE,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameEuthor,
        },
      },
      {
        image: "/assets/images/box-item/banner-08.jpg",
        productInfo: {
          name: nameE,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameEuthor,
        },
      },
    // ... agregar más elementos según sea necesario
  ]


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: '.slider-next',
        prevEl: '.slider-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
}

import { useState } from "react"
import BidModal from "../elements/BidModal"
const currentTime = new Date()
export default function FeaturedSlider2() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    return (
        <>
            {/* <Swiper {...swiperOptions} className="abc">
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper> */}

            <div className="featured pt-10 swiper-container carousel">
            <CardSwiper slideData={slideData} handleBidModal={handleBidModal} currentTime={currentTime} swiperOptions={swiperOptions} />
                <div className="swiper-pagination" />
                <div className="slider-next swiper-button-next" />
                <div className="slider-prev swiper-button-prev" />
            </div>
            <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
        </>
    )
}
