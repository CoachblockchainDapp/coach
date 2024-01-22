

import Link from "next/link"
import FeaturedSlider1 from "../slider/FeaturedSlider1"
import FeaturedSlider2 from "../slider/FeaturedSlider2"
export default function FeaturedItem1() {
    return (
        <>
            <div className="tf-section featured-item style-bottom">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section pb-20">
                                <h2 className="tf-title ">COLECCIÓN AQUA NFT</h2>
                                <Link href="/explore-1" className="white-link">Descubre más <i className="icon-arrow-right2" /></Link>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <FeaturedSlider1 />

                            <div className="heading-section pb-20">
                                <h2 className="tf-title ">COLECCIÓN AER NFT</h2>
                                <Link href="/explore-1" className="white-link">Descubre más <i className="icon-arrow-right2" /></Link>
                            </div>
                            <FeaturedSlider2 />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}




