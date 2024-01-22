import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

const textStyle = {
    fontSize: '16px',
    color: '#5B808A',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'justify', // Añadido para justificar el texto
};

const listStyle = {
    fontSize: '16px',
    color: '#5B808A',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'justify', // Añadido para justificar el texto
};



export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="flat-title-page">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="heading text-center">Terms &amp; Condition</h1>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 widget-term-condition">
                        <div className="themesflat-container">
                            <div className="row flat-tabs">
                                <div className="col-md-3 col-12">
                                    <div className="wrap-menu po-sticky">
                                        <div className="title">Menu</div>
                                        <ul className="menu-tab">
                                            <li className={activeIndex === 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                                <span className="inner">1. Política de Privacidad</span>
                                            </li>
                                            <li className={activeIndex === 2 ? "item-title active" : "item-title"} onClick={() => handleOnClick(2)}>
                                                <span className="inner">2. Política de Cookies de CoachBlockchain</span>
                                            </li>
                                            <li className={activeIndex === 3 ? "item-title active" : "item-title"} onClick={() => handleOnClick(3)}>
                                                <span className="inner">3. Política de Uso Prohibido y Condicional de
                                                    CoachBlockchain</span>
                                            </li>
                                            <li className={activeIndex === 4 ? "item-title active" : "item-title"} onClick={() => handleOnClick(4)}>
                                                <span className="inner">4. Uso del Servicio</span>
                                            </li>
                                            <li className={activeIndex === 5 ? "item-title active" : "item-title"} onClick={() => handleOnClick(5)}>
                                                <span className="inner">5. COACHBLOCKCHAIN.NFTt</span>
                                            </li>
                                            <li className={activeIndex === 6 ? "item-title active" : "item-title"} onClick={() => handleOnClick(6)}>
                                                <span className="inner">6. User Conduct</span>
                                            </li>
                                            <li className={activeIndex === 7 ? "item-title active" : "item-title"} onClick={() => handleOnClick(7)}>
                                                <span className="inner">7. Intellectual Property Rights</span>
                                            </li>
                                            <li className={activeIndex === 8 ? "item-title active" : "item-title"} onClick={() => handleOnClick(8)}>
                                                <span className="inner">8. Communication Preferences</span>
                                            </li>
                                            <li className={activeIndex === 9 ? "item-title active" : "item-title"} onClick={() => handleOnClick(9)}>
                                                <span className="inner">9. App Termsy</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-9 col-12">
                                    <div className="content-tab po-sticky-footer">
                                        <div className="content-inner" style={{ display: `${activeIndex === 1 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p style={textStyle}>
                                                Nosotros en CoachBlockchain respetamos y protegemos la privacidad de aquellos que exploran nuestros Servicios (”Usuarios”) y Usuarios que se registran y acceden a nuestros Servicios (”Clientes”) (a quienes nos referimos en conjunto en esta política como ”usted” o ”su”).
                                            </p>
                                            <p style={textStyle}>
                                                <strong>Lo que debes saber de antemano:</strong>
                                            </p>
                                            <br />
                                            <ul style={listStyle}>
                                                <li>Nuestro objetivo es simplificar tu experiencia en la venta de formación digital, compra de NFT y uso de criptomonedas.</li>
                                                <li>Brindamos la seguridad y la integridad de nuestra plataforma, y cumplir con nuestras obligaciones legales.</li>
                                                <li>No compartimos tu información con otras empresas de CoachBlockchain y con terceros de confianza y proveedores de servicios para ofrecer nuestros servicios y cumplir con los requisitos legales.</li>
                                            </ul>
                                        </div>


                                        <div className="content-inner" style={{ display: `${activeIndex === 2 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p style={textStyle}>
                                                <strong>1. ¿QUÉ SON LAS COOKIES?</strong><br />
                                                Las cookies del navegador son archivos de texto con pequeñas piezas de datos que se descargan en tu ordenador o dispositivo móvil. Las cookies y otras tecnologías similares (denominadas colectivamente "Cookies" en esta Política de Cookies) permiten a los sitios web y aplicaciones almacenar información o facilitar el acceso a la información almacenada en tu dispositivo para habilitar ciertas funciones y distinguirte de otros visitantes.
                                            </p>
                                            <p style={textStyle}>
                                                <strong>2. ¿PARA QUÉ USAMOS LAS COOKIES?</strong><br />
                                                Utilizamos cookies para los siguientes fines:
                                                <ol style={textStyle}>
                                                    <li>Propósitos estrictamente necesarios: esenciales para que nuestros servicios funcionen y no pueden desactivarse.</li>
                                                    <li>Propósitos de rendimiento: para contar visitas y fuentes de tráfico y medir y mejorar el rendimiento de nuestros servicios.</li>
                                                    <li>Propósitos funcionales: para recordar las elecciones que realizas y personalizar nuestros servicios según tus preferencias.</li>
                                                    <li>Propósitos de segmentación: para publicidad personalizada y medición de la efectividad de las campañas publicitarias.</li>
                                                </ol>
                                            </p>
                                            <p style={textStyle}>
                                                <strong>3. ¿CÓMO GESTIONAR LAS COOKIES?</strong><br />
                                                Puedes habilitar o deshabilitar categorías de cookies visitando nuestro Administrador de Preferencias de Cookies. También puedes usar tu navegador para habilitar, deshabilitar o eliminar cookies. Sin embargo, debes tener en cuenta que desactivar las cookies puede afectar tu acceso a áreas seguras y el funcionamiento de nuestros Servicios.
                                            </p>
                                            <p style={textStyle}>
                                                <strong>4. ¿SE ACTUALIZARÁ ESTA POLÍTICA DE COOKIES?</strong><br />
                                                Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en las cookies que utilizamos u otras razones operativas, legales o regulatorias.
                                            </p>
                                        </div>



                                        <div className="content-inner" style={{ display: `${activeIndex === 3 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p style={textStyle}>
                                                Las políticas a continuación son importantes para mantener seguro nuestro ecosistema y se aplican a tu cuenta de CoachBlockchain y al uso de coachblockchain.NFT, las API de CoachBlockchain, las aplicaciones móviles de CoachBlockchain o cualquier otro sitio web de CoachBlockchain (colectivamente el "Sitio de CoachBlockchain").
                                            </p>
                                            <p style={textStyle}>
                                                <strong>1.1 ¿Qué tipo de actividad está prohibida?</strong><br />
                                                No puedes usar tu cuenta de CoachBlockchain para participar en las siguientes categorías de actividades:
                                                <ol style={textStyle}>
                                                    <li>
                                                        Actividad abusiva: acciones que imponen una carga desproporcionadamente grande en nuestra infraestructura, transmiten programas dañinos, o intentan obtener acceso no autorizado al sitio de CoachBlockchain o a sistemas informáticos conectados.
                                                    </li>
                                                    <li>
                                                        Abuso a otros usuarios: interferir con el acceso de otros a los servicios de CoachBlockchain, difamar, abusar, extorsionar, acosar o amenazar a otros, o recopilar información de CoachBlockchain sin consentimiento.
                                                    </li>
                                                    <li>
                                                        Fraude: proporcionar información falsa a CoachBlockchain u operar de manera fraudulenta.
                                                    </li>
                                                    <li>
                                                        Infracción de propiedad intelectual: participar en transacciones que infrinjan los derechos de autor, marcas comerciales u otros derechos de propiedad.
                                                    </li>
                                                </ol>
                                            </p>
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex === 4 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p style={textStyle}>
                                                Al utilizar el servicio de CoachBlockch, aceptas los términos y condiciones establecidos en este documento.
                                            </p>
                                            <p style={textStyle}>
                                                <strong>2 Propiedad Intelectual</strong>: Todos los NFT y contenidos relacionados disponibles en CoachBlockch son propiedad intelectual de sus respectivos creadores. La reproducción no autorizada está estrictamente prohibida.
                                            </p>
                                            <p style={textStyle}>
                                                <strong>3 Propiedad de NFT</strong>: CoachBlockch opera como una plataforma descentralizada que permite a los usuarios comprar, vender y poseer NFT de manera independiente. Una vez completada la transacción, los NFT pasan a ser propiedad exclusiva y total del comprador, quien tendrá plenos derechos para transferir, revender o realizar cualquier otra acción permitida con los NFT en su posesión.
                                            </p>
                                            <p style={textStyle}>
                                                <strong>4 Transacciones y Aprobación</strong>: Las transacciones de NFT en CoachBlockch se ejecutan automáticamente una vez que se completa el proceso de compra. No intervenimos en las transacciones ni restringimos las acciones de los usuarios con respecto a los NFT adquiridos. Los usuarios son responsables de sus propias transacciones y deben cumplir con las regulaciones aplicables en su jurisdicción.
                                            </p>
                                            <p style={textStyle}>
                                                <strong>5 Responsabilidad del Usuario</strong>: Los usuarios son los únicos responsables de garantizar la seguridad de sus NFT y de su wallet. CoachBlockch no asume responsabilidad por la pérdida, robo o mal uso de los NFT o de los fondos asociados en la wallet del usuario. Se recomienda encarecidamente a los usuarios tomar las medidas necesarias para proteger sus activos digitales y practicar la debida diligencia al realizar transacciones en la plataforma.
                                            </p>
                                            <p style={textStyle}>
                                                <strong>6 Comisiones por Referidos</strong>: Los usuarios pueden recibir comisiones por referidos de las ventas de NFT, sujeto a los términos especificados en la plataforma. Las comisiones se pagarán de acuerdo con las políticas de CoachBlockch.
                                            </p>
                                        </div>


                                        <div className="content-inner" style={{ display: `${activeIndex === 5 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p>Welcome to Open9, owned and operated by Ozone Networks, Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These Terms of Service (“Terms”) govern your access to and use of the Open9 website(s), our APIs, mobile applications (“App”), and any live support, software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to view, explore, help display and create NFTs, and using our tools, at your own discretion, to connect directly with others to mint, purchase, sell, or transfer NFTs on public blockchains (collectively, the “Service”). “NFT” in these Terms means a non-fungible token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content or data.</p>
                                            <p>For purposes of these Terms, “user”, “you”, and “your” mean you as the user of the Service. If you use the Service on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.</p>
                                            <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.</p>
                                            <p>BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.</p>
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex === 6 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p>Welcome to Open9, owned and operated by Ozone Networks, Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These Terms of Service (“Terms”) govern your access to and use of the Open9 website(s), our APIs, mobile applications (“App”), and any live support, software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to view, explore, help display and create NFTs, and using our tools, at your own discretion, to connect directly with others to mint, purchase, sell, or transfer NFTs on public blockchains (collectively, the “Service”). “NFT” in these Terms means a non-fungible token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content or data.</p>
                                            <p>For purposes of these Terms, “user”, “you”, and “your” mean you as the user of the Service. If you use the Service on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.</p>
                                            <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.</p>
                                            <p>BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.</p>
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex === 7 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p>Welcome to Open9, owned and operated by Ozone Networks, Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These Terms of Service (“Terms”) govern your access to and use of the Open9 website(s), our APIs, mobile applications (“App”), and any live support, software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to view, explore, help display and create NFTs, and using our tools, at your own discretion, to connect directly with others to mint, purchase, sell, or transfer NFTs on public blockchains (collectively, the “Service”). “NFT” in these Terms means a non-fungible token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content or data.</p>
                                            <p>For purposes of these Terms, “user”, “you”, and “your” mean you as the user of the Service. If you use the Service on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.</p>
                                            <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.</p>
                                            <p>BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.</p>
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex === 8 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p>Welcome to Open9, owned and operated by Ozone Networks, Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These Terms of Service (“Terms”) govern your access to and use of the Open9 website(s), our APIs, mobile applications (“App”), and any live support, software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to view, explore, help display and create NFTs, and using our tools, at your own discretion, to connect directly with others to mint, purchase, sell, or transfer NFTs on public blockchains (collectively, the “Service”). “NFT” in these Terms means a non-fungible token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content or data.</p>
                                            <p>For purposes of these Terms, “user”, “you”, and “your” mean you as the user of the Service. If you use the Service on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.</p>
                                            <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.</p>
                                            <p>BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.</p>
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex === 9 ? "block" : "none"}` }}>
                                            <div className="date">Last Updated: May 19, 2023</div>
                                            <p>Welcome to Open9, owned and operated by Ozone Networks, Inc. d/b/a Open9 (“Open9,” “we,” “us”, or “our”). These Terms of Service (“Terms”) govern your access to and use of the Open9 website(s), our APIs, mobile applications (“App”), and any live support, software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to view, explore, help display and create NFTs, and using our tools, at your own discretion, to connect directly with others to mint, purchase, sell, or transfer NFTs on public blockchains (collectively, the “Service”). “NFT” in these Terms means a non-fungible token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content or data.</p>
                                            <p>For purposes of these Terms, “user”, “you”, and “your” mean you as the user of the Service. If you use the Service on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.</p>
                                            <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.</p>
                                            <p>BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}