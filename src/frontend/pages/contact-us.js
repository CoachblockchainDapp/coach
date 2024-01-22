import Layout from "../components/layout/Layout"
import { Link } from "react-router-dom";
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="contact-us-page relative">

                <div>
                    <div className="flat-title-page">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="heading text-center"><span style={{ color: 'black' }}>Contactanos</span></h1>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                    
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/email.png" alt="" />
                                        <div className="title"><Link to="#">Email</Link></div>
                                        <p>coachblockchain@support.com</p>
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
                                        
                                        <p className="pb-40"><span style={{ color: 'black' }}>¿Tienes alguna pregunta? ¿Necesitas ayuda? No dudes en escribirnos.</span></p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <form id="commentform" className="comment-form">
                                        <div className="flex gap30">
                                            <fieldset className="name">
                                                <input className="style-1" type="text" id="name" placeholder="Nombre*" name="name" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="email">
                                                <input className="style-1" type="email" id="email" placeholder="Email *" name="email" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="Asunto">
                                                <input className="style-1" type="text" id="subject" placeholder="Asunto" name="subject" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                        </div>
                                        <fieldset className="mensaje">
                                            <textarea className="style-1" id="message" name="message" rows={4} placeholder="Mensaje*" tabIndex={4} aria-required="true" required />
                                        </fieldset>
                                        <div className="btn-submit">
                                            <button className="tf-button style-1" type="submit">Enviar <i className="icon-arrow-up-right2" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}