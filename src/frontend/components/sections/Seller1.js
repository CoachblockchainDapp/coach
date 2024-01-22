import { Autoplay, Navigation, Pagination } from "swiper/modules"
import SellerSwiperSlide from "../reusable/SellerSwiperSlide"



const slideData = [
    {
      avatar: "/assets/images/avatar/avatar-01.png",
      link: "/author-2",
      name: "Top Seller ",
      price: "7,080.95"
    },
    {
      avatar: "/assets/images/avatar/avatar-02.png",
      link: "/author-2",
      name: "Top Seller",
      price: "7,080.95"
    },
    {
        avatar: "/assets/images/avatar/avatar-02.png",
        link: "/author-2",
        name: "Top Seller",
        price: "7,080.95"
      },
      {
        avatar: "/assets/images/avatar/avatar-02.png",
        link: "/author-2",
        name: "Top Seller",
        price: "7,080.95"
      },
      {
        avatar: "/assets/images/avatar/avatar-02.png",
        link: "/author-2",
        name: "Top Seller",
        price: "7,080.95"
      },
      {
        avatar: "/assets/images/avatar/avatar-02.png",
        link: "/author-2",
        name: "Top Seller",
        price: "7,080.95"
      },
      {
        avatar: "/assets/images/avatar/avatar-02.png",
        link: "/author-2",
        name: "Top Seller",
        price: "7,080.95"
      },
      {
        avatar: "/assets/images/avatar/avatar-02.png",
        link: "/author-2",
        name: "Top Seller",
        price: "7,080.95"
      },
      
    // ...otros datos de slide
  ];


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 2,
    observer: true,
    grabCursor: true,
    observeParents: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2700,
        disableOnInteraction: false
    },
    navigation: {
        clickable: true,
        nextEl: '.seller-next',
        prevEl: '.seller-prev'
    },
    breakpoints: {
        500: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 5
        },
        1070: {
            slidesPerView: 6
        }
    }
}


import Link from "next/link"
import HoverDropdown from "../elements/HoverDropdown"
export default function Seller1() {
    return (
        <>

            <div className="tf-section seller ">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section">
                                <h2 className="tf-title pb-30">Mejores Ganancias
                                    <HoverDropdown />
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                         
                            <SellerSwiperSlide slides={slideData} swiperOptions={swiperOptions} />

                            <div className="swiper-button-next seller-next over active" />
                            <div className="swiper-button-prev seller-prev over " />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
