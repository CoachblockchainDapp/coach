import React from 'react';
import { FONT_FAMILY,GRAY } from "../../components";

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: FONT_FAMILY,
    width: '100%',
    height: '100%',
    padding: '10%',
};

const titleStyle = {
    fontSize: '5vw', /* Ajusta el tamaño del título al 5% del ancho de la ventana */
    margin: '0',
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
    marginTop: '5%', /* Espaciado superior del 5% */
};

const cardStyle = {
    backgroundColor: GRAY,
    padding: '2%', /* Relleno del 2% */
    borderRadius: '2%', /* Bordes redondeados del 2% */
    boxShadow: '0px 0px 1vw rgba(0, 0, 0, 0.2)', /* Sombra del 1% del ancho de la ventana */
    margin: '0', /* Margen del 4% */
    fontFamily: FONT_FAMILY,
    fontSize: '1.5vw',
};

export const Explore = () => {
    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>A Community for Financial Freedom</h1>
                <p>
                    Welcome to our community dedicated to the pursuit of financial freedom through cutting-edge technology. Here, you will not only learn about intelligent algorithms, smart contracts, and blockchain, but also immerse yourself in a world of opportunities to earn money.
                </p>
                <p>
                    In an environment where the digital economy is constantly evolving, our members have the advantage of being at the forefront. Intelligent algorithms and smart contracts are the heart of our platform, enabling transparent and automated transactions.
                </p>
                <p>
                    Our community offers comprehensive training in blockchain technologies, NFTs, and other essential aspects. As you progress in your education, you will delve into a world of unlimited financial opportunities.
                </p>
                <p>
                    Wondering how to achieve financial freedom? This is where our community shines. Through investment in NFTs and collaboration with other members, you can build a path to financial independence securely and sustainably.
                </p>
                <p>
                    Join us and discover how intelligent algorithms, smart contracts, and blockchain technology are paving the way to a brighter financial future.
                </p>
            </div>
        </div>
    );
};



