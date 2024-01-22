import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  ReusableText,
  ReusableButton,
  CustomHeader,
} from '../../components';

import { cardStyle, } from "../../components/reusable/styles"



const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};



const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
};

const canvasContainerStyle = {
  width: "600px", // Cambia el ancho según lo que necesites
  height: "600px", // Cambia la altura según lo que necesites
};

export const NFTCollection = () => {
  return (
    <>
    <div style={cardStyle}>
      <div style={containerStyle}>
        <CustomHeader children="NFT Collection" fontFamily="Arial, sans-serif" />

        <div style={canvasContainerStyle}>
          <Canvas
            camera={{
              fov: 75,
              near: 0.1,
              far: 100,
              // position: [2, 2, 5],
            }}
          >
           
          </Canvas>
        </div>

        <ReusableText
          fontFamily="Univers, sans-serif"
          fontSize="30px"
          text="La colección de arte digital que estás a punto de adquirir consiste en obras maestras digitales únicas diseñadas por artistas de renombre mundial. Estas piezas de arte digital no solo son un testimonio de la creatividad artística, sino también un activo valioso para el futuro." />

        <ReusableText
          fontFamily="Univers, sans-serif"
          fontSize="30px"
          text="Los NFT han revolucionado el mundo del arte, ofreciendo nuevas oportunidades para que los artistas muestren su talento y para que los coleccionistas inviertan en arte como nunca antes. Únete a nosotros en el mundo de los NFT y emprende un viaje donde el arte, la cultura y la tecnología blockchain se encuentran." />
      </div><div style={buttonContainerStyle}>
          <ReusableButton
            backgroundColor="linear-gradient(0deg, rgba(10,83,100,1) 0%, rgba(10,83,100,1) 100%)"
            hoverColor="linear-gradient(315deg, rgba(30,83,105,1) 0%, rgba(30,83,105,1) 100%)"
            textColor="#fff"
            text="Inicio"
            linkTo="/" />

          <ReusableButton
            backgroundColor="linear-gradient(0deg, rgba(10,83,100,1) 0%, rgba(10,83,100,1) 100%)"
            hoverColor="linear-gradient(315deg, rgba(30,83,105,1) 0%, rgba(30,83,105,1) 100%)"
            textColor="#fff"
            text="Aulas"
            linkTo="/classroom" />
        </div>
    </div></>
  );
};


