import React from "react";
import { ReusableButton, NFTGallery, ReusableText } from "../../components";
import {cardStyle,containerStyle,textContainerStyle,buttonContainerStyle,canvasContainerStyle} from "../../components/reusable/styles"



const pexel = (id) =>
  `https://raw.githubusercontent.com/coachblockchain/Images/main/${id}.png`;

const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(4048) },
  // Back
  { position: [-0.8, 0, -0.8], rotation: [0, 0, 0], url: pexel(10134) },
  { position: [0.8, 0, -0.8], rotation: [0, 0, 0], url: pexel(90) },
  // Left
  {
    position: [-2, 0, -0.1],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(4003),
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(48),
  },
  {
    position: [-2, 0, 2.8],
    rotation: [0, Math.PI / 2.5, 0],
    url: pexel(10331),
  },
  // Right
  {
    position: [2, 0, -0.1],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(10097),
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(4196),
  },
  {
    position: [2, 0, 2.8],
    rotation: [0, -Math.PI / 2.5, 0],
    url: pexel(10215),
  },
];


export const Home = () => {
  return (
    <div style={cardStyle}>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
        <div style={{ width: '550px', height: '200px' }}>
  <ReusableText
    fontFamily="Univers, sans-serif"
    fontSize="35px"
    text="El valor de la Tecnología Blockchain"
  />
  <ReusableText
    fontFamily="Univers, sans-serif"
    fontSize="20px"
    text="Conoce la Tecnología Blockchain y el Arte Digital formándote con los mejores profesionales, con una comprensión profunda."
  />
</div>

        

          <div style={buttonContainerStyle}>
            <ReusableButton
              backgroundColor="linear-gradient(0deg, rgba(10,83,100,1) 0%, rgba(10,83,100,1) 100%)"
              hoverColor="linear-gradient(315deg, rgba(30,83,105,1) 0%, rgba(30,83,105,1) 100%)"
              textColor="#fff"
              text="Empezar"
              linkTo="/packages"
            />
            <ReusableButton
              backgroundColor="linear-gradient(0deg, rgba(10,83,100,1) 0%, rgba(10,83,100,1) 100%)"
              hoverColor="linear-gradient(315deg, rgba(30,83,105,1) 0%, rgba(30,83,105,1) 100%)"
              textColor="#fff"
              text="Descubre"
              linkTo="/packages"
            />
          </div>
        </div>

        <div style={canvasContainerStyle}>
          <NFTGallery images={images} />
        </div>
      </div>
    
    </div>
  );
};

