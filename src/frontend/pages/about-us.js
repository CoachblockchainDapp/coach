import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"


const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

import { useState } from "react"
export default function Home() {

    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">

                <div>
                    <div className="page-title about-us relative">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                        <h1 data-wow-delay="0s" className="wow fadeInUp">Experiencia única en  la formación del mundo blockchain</h1>
                                        <p data-wow-delay="0.1s" className="wow fadeInUp">Comienza con la plataforma más fácil y segura para comprar, intercambiar y aprender sobre arte digital y técnologia blockchain . Únete a nuestra comunidad educativa y explora el emocionante mundo de la tecnología blockchain y los NFTs.</p>

                                        <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex justify-center">
                                            <Link href="#" className="tf-button style-1 h50 w190">Empezar <i className="icon-arrow-up-right2" /></Link>

                                        </div>
                                    </div>







                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 counter">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="counter__body-1">
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={99} data-inviewport="yes"><CounterUp count={99} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Arte Digital</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={72} data-inviewport="yes"><CounterUp count={72} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Formación</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={35} data-inviewport="yes"><CounterUp count={35} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Miembros</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={128} data-inviewport="yes"><CounterUp count={128} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Volumen de  USDTs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">¿Por qué elegirnos?</h2>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/item-background/about-01.png" alt="" />
                                        <div className="title"><Link href="#">Pagos al Instante</Link></div>
                                        <p>Realizamos pagos al instante, proporcionando una experiencia rápida y eficiente para nuestros usuarios.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/item-background/about-02.png" alt="" />
                                        <div className="title"><Link href="#">Seguridad</Link></div>
                                        <p>Nuestra plataforma garantiza la seguridad de tus transacciones y datos personales, utilizando las últimas medidas de seguridad.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/item-background/about-03.png" alt="" />
                                        <div className="title"><Link href="#">Gestión con Contratos Inteligentes</Link></div>
                                        <p>Ofrecemos una gestión eficiente mediante contratos inteligentes, facilitando procesos transparentes y automatizados para nuestros usuarios.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className="tf-section-2 wrap-accordion pt-80">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">Preguntas frecuentes</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                        <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(1)}>1. ¿Por qué se están volviendo populares los NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <p>Los NFT (Tokens No Fungibles) se han vuelto populares debido a su capacidad para representar la propiedad única e indivisible de activos digitales, como obras de arte y colecciones exclusivas, utilizando la tecnología blockchain.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(2)}>2. ¿Cómo mantengo seguros mis NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <p>Para mantener seguros tus NFT, es crucial utilizar billeteras y plataformas confiables, habilitar autenticación de dos factores, y seguir las mejores prácticas de seguridad digital, como resguardar claves privadas.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>3. ¿Qué es blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>Blockchain es un registro compartido e inmutable que facilita el proceso de registrar transacciones y rastrear activos en una red empresarial. Puede representar tanto activos tangibles como intangibles, ofreciendo seguridad y eficiencia.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>4. ¿Qué es un NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>Un NFT (Token No Fungible) es un activo digital único que utiliza la tecnología blockchain para garantizar su autenticidad y propiedad. Cada NFT es único y no se puede intercambiar de manera equivalente con otros tokens.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>5. ¿Cómo configuro mi Ledger?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>Configurar tu Ledger para almacenar tus NFT implica seguir los procedimientos específicos proporcionados por el fabricante. Generalmente, implica conectar tu Ledger a una billetera compatible y seguir los pasos de configuración.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                
                                <div className="col-md-6">
                                    <div className="flat-accordion2">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>6. ¿Cuáles son los tipos de wallets?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                <p>Existen varios tipos de wallets, siendo las más comunes las wallets de software (online, desktop, y móviles), wallets de hardware (dispositivos físicos), y wallets de papel (almacenamiento en forma impresa). Cada tipo tiene sus propias ventajas en términos de accesibilidad y seguridad.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>7. ¿Qué son las stablecoins?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                <p>Las stablecoins son criptomonedas diseñadas para mantener un valor estable vinculándose a activos externos como monedas fiduciarias o commodities. Su función principal es ofrecer estabilidad de precio en comparación con las criptomonedas más volátiles, como Bitcoin, facilitando así su uso en transacciones cotidianas.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>8. ¿En qué consiste la descentralización ?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <p>La descentralización implica la distribución del control y la toma de decisiones en una red criptográfica entre múltiples participantes, eliminando así la dependencia de una autoridad central. Esto mejora la seguridad y resistencia a la censura, características fundamentales en el diseño de las criptomonedas.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(9)}>9. ¿Qué es Bitcoin y cómo funciona?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                <p>Bitcoin es la primera y más conocida criptomoneda, creada en 2009 por una entidad o persona bajo el seudónimo de Satoshi Nakamoto. Funciona en una red peer-to-peer descentralizada, donde los usuarios pueden realizar transacciones directas sin necesidad de intermediarios como bancos. La tecnología subyacente, llamada blockchain, registra todas las transacciones de manera segura e inmutable. Además, Bitcoin utiliza un proceso llamado minería, donde los participantes de la red compiten para validar transacciones y agregar nuevos bloques a la cadena, siendo recompensados con nuevos bitcoins. Su propósito principal es actuar como una forma de dinero digital resistente a la censura y la manipulación gubernamental, permitiendo transferencias de valor sin la necesidad de depender de una entidad central. Bitcoin ha ganado popularidad como un activo digital y una reserva de valor.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(10)}>10. ¿Por qué se utiliza la tecnología blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                <p>La tecnología blockchain se utiliza en criptomonedas como Bitcoin debido a sus características fundamentales de descentralización, seguridad y transparencia. La blockchain actúa como un registro distribuido e inmutable de todas las transacciones realizadas, lo que elimina la necesidad de una entidad central de control. Esto no solo proporciona seguridad al evitar la alteración de datos, sino que también permite transacciones directas entre pares sin intermediarios. La descentralización inherente a la blockchain garantiza que no haya un solo punto de falla y que la red sea resistente a la censura. Además, la transparencia de la blockchain permite a los participantes verificar todas las transacciones, construyendo así un sistema confiable y de confianza en el que se basa el funcionamiento de las criptomonedas como Bitcoin.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-12">
                                    <div className="content">
                                        <div className="text">¿Todavía tienes preguntas?</div>
                                        <p>¿No puedes encontrar lo que estás buscando? Por favor, <Link href="/contact-us" className="tf-color">chatea con nuestro amable equipo</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                </div>
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
            </Layout>
        </>
    )
}