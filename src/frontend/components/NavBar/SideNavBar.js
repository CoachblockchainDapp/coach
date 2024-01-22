import React from 'react';
import './styles.css';


import { Sidenav, Nav } from 'rsuite';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';


const sidebarStyles = {
    width: '300px',
    position: 'fixed',
    top: '15%',
    left: 0,
    height: '85%', /* Ajusta el tamaño vertical aquí según sea necesario */
    overflowY: 'auto', /* Permite el desplazamiento vertical */
    zIndex: 1000,
    backgroundColor: '#0A5364', /* Establece un color de fondo */
};





export const SideNavBar = ({ onSelect }) => {
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');

    const handleSelect = (eventKey) => {
        onSelect(eventKey); // Llama a la función prop onSelect pasando el eventKey
    };



    return (

        <div style={sidebarStyles}>
            <Sidenav expanded={expanded} defaultOpenKeys={['1']}>
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={handleSelect}>

                        {/*Modulo 1*/}

                        <Nav.Menu
                            placement="rightStart"
                            eventKey='1'
                            title="Introducción a la Tecnología Blockchain"
                            icon={<GearCircleIcon />}
                        >
                            <Nav.Menu eventKey="1-1" title="Tipos de Blockchains">
                                <Nav.Item eventKey="1-1-0">Tipos </Nav.Item>
                                <Nav.Item eventKey="1-1-1">Públicas, Privadas y Consorcio</Nav.Item>
                             
                            </Nav.Menu>
                            <Nav.Item eventKey="1-2">Fundamentos de la Blockchain</Nav.Item>
                            <Nav.Item eventKey="1-3">Historia de la Blockchain</Nav.Item>
                            <Nav.Item eventKey="1-4">Casos de Uso</Nav.Item>
                        </Nav.Menu>


                        {/*Modulo 2*/}

                        <Nav.Menu
                            placement="rightStart"
                            eventKey="2"
                            title="Bitcoin y Criptomonedas"
                            icon={<GearCircleIcon />}
                        >
                            <Nav.Item eventKey="2-1">BITCOIN</Nav.Item>
                            <Nav.Menu eventKey="2-2" title="ALTCOINS">
                                <Nav.Item eventKey="2-2-1"> Función en el Mercado</Nav.Item>
                                <Nav.Item eventKey="2-2-2"> Diversidad de Altcoins</Nav.Item>
                                <Nav.Item eventKey="2-2-3">  Ethereum 2.0</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu eventKey="2-3" title="STABLECOINS">
                                <Nav.Item eventKey="2-3-1"> Tipos de STABLECOINS</Nav.Item>
                                <Nav.Item eventKey="2-3-2"> Usos y aplicaciones</Nav.Item>

                            </Nav.Menu>
                            <Nav.Item eventKey="2-4">Ecosistemas</Nav.Item>
                            <Nav.Item eventKey="2-5">Evolución</Nav.Item>
                        </Nav.Menu>

                        {/*Modulo 3*/}

                        <Nav.Menu
                            placement="rightStart"
                            eventKey="3"
                            title="Centralización vs. Descentralización"
                            icon={<GearCircleIcon />}
                        >
                            <Nav.Item eventKey="3-1">Centralización</Nav.Item>
                            <Nav.Item eventKey="3-2">Descentralización</Nav.Item>
                            <Nav.Item eventKey="3-3">Contrastes</Nav.Item>
                            <Nav.Item eventKey="3-4">Impactos en Sistemas Finacieros</Nav.Item>
                            <Nav.Item eventKey="3-5">Uso de datos</Nav.Item>

                        </Nav.Menu>



                        {/*Modulo 4*/}

                        {/* Nav Menu for Wallet Types */}
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="4"
                            title="Wallets y Seguridad"
                            icon={<GearCircleIcon />}
                        >
                            <Nav.Menu eventKey="4-1-1" title="Hot Wallets">
                                <Nav.Item eventKey="4-1-1-1">Hardware</Nav.Item>
                                <Nav.Item eventKey="4-1-1-2">Software</Nav.Item>
                                {/* Add more options for Hot Wallets */}
                            </Nav.Menu>
                            <Nav.Menu eventKey="4-1-2" title="Cold Wallets">
                                <Nav.Item eventKey="4-1-2-1">Papel</Nav.Item>
                                {/* Add more options for Cold Wallets */}
                            </Nav.Menu>

                            <Nav.Item eventKey="4-2">Transacciones</Nav.Item>
                            <Nav.Item eventKey="4-3">Capas de Seguridad</Nav.Item>
                            <Nav.Item eventKey="4-4">Métodos de Almacenamiento</Nav.Item>
                            <Nav.Item eventKey="4-5">Tensor</Nav.Item>
                            <Nav.Item eventKey="4-6">Metamask</Nav.Item>
                            <Nav.Item eventKey="4-7">Layer-2 en Wallets</Nav.Item>


                        </Nav.Menu>

                        {/*Modulo 5*/}

                        <Nav.Menu
                            placement="rightStart"
                            eventKey="5"
                            title="Futuro de las Criptomonedas"
                            icon={<GearCircleIcon />}
                        >
                            <Nav.Item eventKey="4-1">Proyecciones Futuras del Mercado Cripto</Nav.Item>
                            <Nav.Item eventKey="4-2">CoinMarketCap</Nav.Item>
                            <Nav.Item eventKey="4-3">Escalabilidad en Blockchain</Nav.Item>
                            <Nav.Item eventKey="4-4">Innovaciones tecnológicas</Nav.Item>
                            <Nav.Item eventKey="4-5">Aplicaciones en Criptomonedas</Nav.Item>
                            <Nav.Item eventKey="4-6">Desarrollos emergentes</Nav.Item>
                            <Nav.Item eventKey="4-7">Su Influencia</Nav.Item>


                        </Nav.Menu>

                        {/*Modulo 6*/}

                        <Nav.Menu
                            placement="rightStart"
                            eventKey="6"
                            title="Finanzas Descentralizadas(DeFi)"
                            icon={<GearCircleIcon />}
                        >
                            <Nav.Item eventKey="6-1">¿Qué es el DeFi?</Nav.Item>
                            <Nav.Item eventKey="6-2">Funcionalidad Actual</Nav.Item>
                            <Nav.Item eventKey="6-3">Tendencias Futuras</Nav.Item>
                            <Nav.Item eventKey="6-4">Potencial de DeFi</Nav.Item>
                            <Nav.Item eventKey="6-5">Impacto de la Devaluación de la moneda y la inflación en DeFi</Nav.Item>

                        </Nav.Menu>

                        {/*Modulo 7*/}

                        <Nav.Menu
                            placement="rightStart"
                            eventKey="7"
                            title="Descentralized Applications (DApps)"
                            icon={<MagicIcon />}
                        >
                            <Nav.Item eventKey="7-1">Introducción a las DApps</Nav.Item>
                            <Nav.Item eventKey="7-2">Arquitectura de las DApps</Nav.Item>
                            <Nav.Item eventKey="7-3">Casos de Uso Comunes</Nav.Item>
                            <Nav.Item eventKey="7-4">Seguridad en las DApps</Nav.Item>
                            <Nav.Item eventKey="7-5">Interoperabilidad en DApps</Nav.Item>
                            <Nav.Item eventKey="7-6">Retos y Futuro de las DApps</Nav.Item>
                        </Nav.Menu>

                        {/*Modulo 8*/}

                        <Nav.Menu
                            placement="rightStart"
                            eventKey="8"
                            title="Non-Fungible Tokens (NFTs)"
                            icon={<MagicIcon />}
                        >
                            <Nav.Item eventKey="8-1">¿Qué son los NFTs?</Nav.Item>
                            <Nav.Item eventKey="8-2">Tecnología detrás de los NFTs</Nav.Item>
                            <Nav.Item eventKey="8-3">Usos y Aplicaciones</Nav.Item>
                            <Nav.Item eventKey="8-4">Economía de los NFTs</Nav.Item>
                            <Nav.Item eventKey="8-5">Desarrollo de NFTs</Nav.Item>
                            <Nav.Item eventKey="8-6">Impacto Cultural y Futuro de los NFTs</Nav.Item>
                        </Nav.Menu>


                        {/*Modulo 9*/}

                        <Nav.Menu
                            placement="rightStart"
                            eventKey="9"
                            title="Smart Contracts"
                            icon={<MagicIcon />}
                        >
                            <Nav.Item eventKey="9-1">Smart Contracts</Nav.Item>
                            <Nav.Item eventKey="9-2">Desarrollo y Lenguajes</Nav.Item>
                            <Nav.Item eventKey="9-3">Implementaciones y Ejemplos</Nav.Item>
                            <Nav.Item eventKey="9-4">Seguridad y Auditoría</Nav.Item>
                            <Nav.Item eventKey="9-5">Aplicaciones y Futuro</Nav.Item>
                        </Nav.Menu>



                        {/*Modulo 10*/}
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="10"
                            title="Mercados en Blockchain"
                            icon={<MagicIcon />}
                        >
                            <Nav.Item eventKey="10-1"> Mercados en Blockchain</Nav.Item>
                            <Nav.Item eventKey="10-2">Tipos de Mercados</Nav.Item>
                            <Nav.Item eventKey="10-3">Desarrollo y Funcionamiento</Nav.Item>
                            <Nav.Item eventKey="10-4">Aplicaciones y Casos de Uso</Nav.Item>
                            <Nav.Item eventKey="10-5">Desafíos y Futuro de los Mercados en Blockchain</Nav.Item>
                        </Nav.Menu>

                    </Nav>
                </Sidenav.Body>

            </Sidenav>
        </div>
    );
};
