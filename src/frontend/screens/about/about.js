import React, { useState } from "react";
import {
    ReusableButton,
    ReusableText,
    CustomHeader,
    HeightSpacer,
    List,
} from "../../components";

import { cardStyle, containerStyle, } from "../../components/reusable/styles"


import { BasicEducation } from "../../data/EducationList";
import ReferralTable from '../../data/ReferralTable'
import { InfoNet, InfoNetFreedom, MarketplaceInfo } from "../../data/InfoNet";

import {NFTs} from "../../components/animation/NFTs"

const fullPageStyle = {
    width: '100vw', // Ancho del contenedor
    height: '70vh', // Altura del contenedor
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};





export const About = () => {
    const [textSize] = useState(24); // Tamaño de fuente inicial
    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <CustomHeader children="¡Bienvenido al Marketplace COACH BLOCKCHAIN!" fontFamily="Arial, sans-serif" />

                <div style={fullPageStyle}>
                    <NFTs />
                </div>


                <ReusableText
                    fontFamily="Univers, sans-serif"
                    fontSize="30px"
                    text="www.coachblockchain.NFT ofrece una oportunidad única para los entusiastas del mundo de los NFTs y el blockchain. Cada adquisición de un NFT por 390 USDT otorga acceso exclusivo a una variedad de beneficios, incluyendo:"
                />
                <HeightSpacer height={30} />

                <List items={MarketplaceInfo} fontSize={textSize} />

                <HeightSpacer height={30} />

                <ReusableText
                    fontFamily="Univers, sans-serif"
                    fontSize="30px"
                    text="El registro y la adquisición de un NFT son requisitos indispensables para disfrutar de todos estos beneficios. Con cada compra, se otorga un NFT exclusivo que actúa como puerta de entrada a la comunidad y a las oportunidades que ofrecemos."
                />

                <HeightSpacer height={40} />

                <CustomHeader children="Formación" fontFamily="Arial, sans-serif" />

                <HeightSpacer height={30} />

                <List items={BasicEducation} fontSize={textSize} />

                <HeightSpacer height={40} />

                <CustomHeader
                    children="¿Cómo lograr la libertad financiera?"
                    fontFamily="Arial, sans-serif"
                />

                <HeightSpacer height={30} />

                <List items={InfoNet} fontSize={textSize} />

                <HeightSpacer height={30} />

                <CustomHeader
                    children="¿Cómo unirse a la red?"
                    fontFamily="Arial, sans-serif"
                />

                <HeightSpacer height={30} />

                <ReusableText
                    fontFamily="Univers, sans-serif"
                    fontSize="30px"
                    text="Para unirte a nuestra comunidad, sigue estos simples pasos:"
                />

                <HeightSpacer height={30} />

                <List items={InfoNetFreedom} fontSize={textSize} />

                <HeightSpacer height={30} />

                <CustomHeader
                    children="¿Qué recibirás?"
                    fontFamily="Arial, sans-serif"
                />

                <HeightSpacer height={30} />

                <ReferralTable />

                <HeightSpacer height={30} />



                <ReusableText
                    fontFamily="Univers, sans-serif"
                    fontSize="30px"
                    text="Cada persona puede elegir el paquete que mejor se adapte a sus necesidades."
                />


                <HeightSpacer height={20} />

                <ReusableText
                    fontFamily="Univers, sans-serif"
                    fontSize="30px"
                    text="Únete a nuestra comunidad de entusiastas de NFT y blockchain, y comienza tu viaje en este emocionante mundo lleno de posibilidades. ¡Esperamos ver cómo creces y te desarrollas en nuestra plataforma!"
                />

                <HeightSpacer height={30} />

                <div style={{
                    textAlign: 'center',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                }}>
                    <ReusableButton
                        backgroundColor="linear-gradient(0deg, rgba(10,83,100,1) 0%, rgba(10,83,100,1) 100%)"
                        hoverColor="linear-gradient(315deg, rgba(30,83,105,1) 0%, rgba(30,83,105,1) 100%)"
                        textColor="#fff"
                        text="Inicio"
                        linkTo="/"
                    />
                </div>

            </div>
        </div>
    );
};
