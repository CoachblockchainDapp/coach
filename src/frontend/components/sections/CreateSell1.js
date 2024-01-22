
import Link from "next/link"
import ArrowIcon from "../elements/ArrowIcon"

export default function CreateSell1() {
    return (
        <>
      <div className="tf-section create-sell">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section justify-content-center">
                                <h2 className="tf-title pb-30">Paso a Paso para Lograr tu Estabilidad Financiera</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-01.png" alt="" />
                                    <p>Step 1</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us"><span style={{ color: 'white' }}>Regístrate con nosotros</span></Link></h4>
                                <p className="content">Adquiere cualquiera de nuestros paquetes para configurar tu billetera.</p>
                                <ArrowIcon></ArrowIcon>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center type-1">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-02.png" alt="" />
                                    <p>Step 2</p>
                                </div>
                                <h4 className="heading">
                                    <Link href="/contact-us">  <span style={{ color: 'white' }}>Explora</span> </Link>
                                </h4>
                                <p className="content">
                                    Explora la opciones que tenemos para lograr la estabilidad financiera.
                                </p>
                                <ArrowIcon></ArrowIcon>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-03.png" alt="" />
                                    <p>Step 3</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us"><span style={{ color: 'white' }}>Agrega Miembros a tu Red</span></Link></h4>
                                <p className="content">Compra o referir miembros dentro de tu red.</p>
                                <ArrowIcon></ArrowIcon>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-box-icon relative text-center">
                                <div className="image">
                                    <img src="/assets/images/box-icon/icon-04.png" alt="" />
                                    <p>Step 4</p>
                                </div>
                                <h4 className="heading"><Link href="/contact-us"><span style={{ color: 'white' }}>Comienza a Ganar</span></Link></h4>
                                <p className="content">Ve crecer tus ingresos a través de la comunidad.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
