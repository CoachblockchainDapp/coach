
import Layout from "../components/layout/Layout"
import FeaturedSlider1 from "../components/slider/FeaturedSlider1"
import {SphereToPlaneWithRotation} from "../components/animation/EarthScene"
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";


export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="tf-section-2 product-detail">
                        <div className="themesflat-container">

                        <div className="col-12">
                                    <h1 className="heading text-center"> <span style={{ color: 'black' }}>Los NFTs</span></h1>
                                    <br/>
                                    

                                </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column', // Para alinear verticalmente
                                    justifyContent: 'center', // Para centrar horizontalmente
                                    textAlign: 'center', // Para centrar el texto
                                    marginTop:'20px',
                              
                                }}
                            >
                          
                                <br/>

                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ color: 'white' }} // Añadí color blanco al estilo
                                >
                                   <span style={{ color: 'black' }}> El arte digital es una disciplina creativa artística que utiliza la tecnología digital para crear obras de arte. A diferencia de otras formas de arte, el digital se basa en el uso de programas y herramientas digitales para la creación de imágenes, videos, animaciones entre otros.</span>


                                </p>
                                <br/>
                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ color: 'white' }} // Añadí color blanco al estilo
                                >
                             <span style={{ color: 'black' }}>  El Arte Digital ha adquirido popularidad y relevancia en los últimos años de la era digital, utilizándose en multitud de contextos como la publicidad, diseño gráfico, animación y en la producción de videojuegos.  Se trata de una forma de arte que puede estar acreditado con un certificado de autenticidad y exhibirse en galerías y museos. </span> 
                                </p>
                            </div>



                            <Canvas style={{ width: '100%', height: '100vh' }}
                                camera={{
                                    fov: 75,
                                    near: 0.1,
                                    far: 100,
                                    // position: [2, 2, 5],
                                }}
                            >
                                <SphereToPlaneWithRotation />
                            </Canvas>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column', // Para alinear verticalmente
                                    justifyContent: 'center', // Para centrar horizontalmente
                                    textAlign: 'center', // Para centrar el texto
                                    marginTop:'20px',
                              
                                }}
                            >
                              
                                <br/>

                                
                                <br/>

                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ color: 'white' }} // Añadí color blanco al estilo
                                >

<span style={{ color: 'black' }}> NFT Token No Fungible, por sus siglas en inglés) son obras digitales que pueden ser compradas y vendidas como cualquier otro tipo de propiedad, pero no tienen forma tangible. Por ejemplo, una fotografía digital o un vídeo, son piezas de arte que no existen en el mundo físico. Hasta ahora, los artistas que trabajaban con soportes digitales tenían verdaderas dificultades para comercializar su producto porque no podían firmar y seriar su obra como se haría con un grabado o una foto impresa, es decir, era imposible distinguir el original de una copia. Con la inclusión de un NFT se puede confirmar la autenticidad, con el añadido de que se registra la historia de compraventas futuras, lo que supone que el artista puede obtener también los derechos de autoría de cada transacción.Tengamos claro que un NFT es un certificado. No es un tipo de obra de arte ni una técnica de creación ni un movimiento artístico.</span>
                                </p>

                                <br/>
                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ color: 'white' }} // Añadí color blanco al estilo
                                >
                                    Los NFT han revolucionado el mundo del arte, ofreciendo nuevas oportunidades para que los artistas muestren su talento y para que los coleccionistas inviertan en arte como nunca antes. Únete a nosotros en el mundo de los NFT y emprende un viaje donde el arte, la cultura y la tecnología blockchain se encuentran.
                                </p>
                            </div>



                        </div>
                    </div>
                    <div className="tf-section-2 featured-item style-bottom">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section pb-20">
                                        <h2 className="tf-title ">Nuevas Colecciones</h2>
                                        <Link to="/explore-1" className="white-link">Descubre más <i className="icon-arrow-right2" /></Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <FeaturedSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}