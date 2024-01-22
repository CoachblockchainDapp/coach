

import Link from "next/link"
import AutoSlider1 from "../slider/AutoSlider1"
import AutoSlider2 from "../slider/AutoSlider2"
export default function Action2() {
    return (
        <>
            <div className="tf-section action">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="action__body">
                                <div className="tf-tsparticles">
                                    <div id="tsparticles1" data-color="#161616" data-line="#000" />
                                </div>
                                <h2>Descubre, emprende y alcanza la libertad financiera</h2>
                                <div className="flat-button flex">
                                    <Link href="#" className="tf-button style-2 h50 w190 mr-10">Unete<i className="icon-arrow-up-right2" /></Link>
                                    <Link href="/explore-1" className="tf-button style-2 h50 w230">Explora<i className="icon-arrow-up-right2" /></Link>
                                </div>
                                <div className="bg-home7">
                                    <AutoSlider1 />
                                    <AutoSlider2 />
                                    <AutoSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
