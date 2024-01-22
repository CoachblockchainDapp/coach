import { Link } from "react-router-dom";
import '../../../public/assets/css/style.css'

export default function Footer1() {
    return (
        <>
            <footer id="footer">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-content flex flex-grow">
                                <div className="widget-logo flex-grow">
                                    <div className="logo-footer" id="logo-footer">
                                        <Link to="/">
                                            <img
                                                id="logo_footer"
                                                src="https://raw.githubusercontent.com/coachblockchain/Images/main/COACH%20ORO.png"
                                                alt="Logo de la empresa"
                                            />

                                        </Link>
                                    </div>
                                </div>
                                <div className="widget widget-menu style-1">
                                    <h5 className="title-widget">Mercado</h5>
                                    <ul>
                                        <li><Link to="/explore-1">Todos los NFT</Link></li>
                                        <li><Link to="/explore-1">Mundos virtuales</Link></li>
                                        <li><Link to="/explore-1">Nuestros NFT</Link></li>
                                        <li><Link to="/explore-1">Arte digital</Link></li>

                                    </ul>
                                </div>

                                <div className="widget widget-menu style-2">
                                    <h5 className="title-widget">Recursos</h5>
                                    <ul>
                                        <li><Link to="/contact-us">Centro de ayuda</Link></li>
                                        <li><Link to="/maintenance">Estado de la plataforma</Link></li>
                                        <li><Link to="/about-us">Conocenos</Link></li>
                                        <li><Link to="/about-us">Descubrir</Link></li>
                                        <li><Link to="#">Paquetes</Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget-menu style-3">
                                    <h5 className="title-widget">Cuenta</h5>
                                    <ul>
                                        <li><Link to="/explore-1">Autores</Link></li>
                                        <li><Link to="/explore-1">Perfil del colecciones</Link></li>
                                    </ul>
                                </div>

                                <div className="widget-last">
                                    <div className="widget-menu style-4">
                                        <h5 className="title-widget">Empresa</h5>
                                        <ul>
                                            <li><Link to="/contact-us">Centro de ayuda</Link></li>
                                        </ul>
                                    </div>
                                    <h5 className="title-widget mt-30">¡Únete a la comunidad!</h5>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} COACH BLOCKCHAIN</p>
                        <ul className="flex">
                            <li>
                                <Link to="#">Política de privacidad</Link>
                            </li>
                            <li>
                                <Link to="#">Términos de servicio</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
