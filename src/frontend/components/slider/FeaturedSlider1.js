
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import {nameA,price} from "../../util/constants"
import CardSwiper from "../reusable/CardSwiper"
import { useState } from "react"
import BidModal from "../elements/BidModal"


const nameAuthor='Coach Bloackchain'
const aqua= '/assets/images/avatar/AQUA .png' 
const slideData = [
    {
      image: "/assets/images/box-item/card-item-01.jpg",
      productInfo: {
        name: nameA,
        price: price,
      },
      author: {
        avatar: aqua,
        link: "/author-1",
        name: nameAuthor,
      },
    },
    {
      image: "/assets/images/box-item/card-item-23.jpg",
      productInfo: {
        name: nameA,
        price: price,
      },
      author: {
        avatar: aqua,
        link: "/author-2",
        name: nameAuthor,
      },
    },
    {
        image: "/assets/images/box-item/card-item-13.jpg",
        productInfo: {
          name: nameA,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameAuthor,
        },
      },
      {
        image: "/assets/images/box-item/card-item-15.jpg",
        productInfo: {
          name: nameA,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-1",
          name: nameAuthor,
        },
      },
      {
        image: "/assets/images/box-item/card-item-04.jpg",
        productInfo: {
          name: nameA,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameAuthor,
        },
      },
      {
        image: "/assets/images/box-item/card-item-17.jpg",
        productInfo: {
          name: nameA,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameAuthor,
        },
      },
      {
        image: "/assets/images/box-item/card-item-26.jpg",
        productInfo: {
          name: nameA,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameAuthor,
        },
      },
      {
        image: "/assets/images/box-item/card-item-14.jpg",
        productInfo: {
          name: nameA,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameAuthor,
        },
      },
      {
        image: "/assets/images/box-item/card-item-11.jpg",
        productInfo: {
          name: nameA,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameAuthor,
        },
      },
      {
        image: "/assets/images/box-item/card-item-59.jpg",
        productInfo: {
          name: nameA,
          price: price,
        },
        author: {
          avatar: aqua,
          link: "/author-2",
          name: nameAuthor,
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


const currentTime = new Date()
export default function FeaturedSlider1() {
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
