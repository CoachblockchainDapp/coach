import Link from "next/link"
import TitileSlider1 from "../slider/TitileSlider1"
export default function FlatTitle1() {
    return (
        <>
            <div className="flat-pages-title">
                <div className="widget-bg-line">
                    <div className="wraper">

                        <div className="bg-grid-line y bottom">
                            <div className="bg-line" />
                        </div>
                    </div>
                </div>
                <div className="themesflat-container w1490">
                    <div className="row">
                        <div className="col-12 pages-title">
                            <div className="content">
                            <h1 data-wow-delay="0s" className="wow fadeInUp" style={{ fontSize: '40px',marginRight:'-40px' }}>
  El valor de la Tecnología Blockchain
</h1>

                                <p className="wow fadeInUp" data-wow-delay="0.1s">Conoce la Tecnología Blockchain y el Arte Digital formándote con los  mejores profesionales, con una comprensión profunda.</p>
                                <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex justify-center">
                                    <Link href="/" className="tf-button style-1 h50 w190 mr-16">Únete<i className="icon-arrow-up-right2" /></Link>
                                    <Link href="/explore-1" className="tf-button style-1 h50 w190 active">Descubre más <i className="icon-arrow-up-right2" /></Link>
                                </div>

                            </div>
                            <div className="icon-background">
                               
                                <img className="absolute item3" src="/assets/images/item-background/item3.png" alt="" />
                             
                               
                                <img className="absolute item6" src="/assets/images/item-background/item10.png" alt="" />
                                
                              
                            </div>
                          
                           
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
