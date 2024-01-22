import React, { useState } from 'react';
import {YELLOW,BLACK,WHITE,TURQUOISE} from "../../components";


const containerStyles = {
    padding: '30px 30px',
    display: 'grid', // Cambiado a 'grid'
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gridAutoRows: '400px',
    gridGap: '80px',
    alignItems: 'stretch',
    marginTop:100,
  };

  const boxStyles = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    background: TURQUOISE,
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    borderBottomLeftRadius: '150px',
    borderBottomRightRadius: '150px',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: YELLOW,
    boxShadow: '0 0 0 6px #0A4F5F, 0 0 0 5px #D4AE42, 0 0 0 20px #0A4F5F, 0 10px 40px rgba(0, 0, 0, 1)',
    transition: '0.5s',
  };

  const titleStyles = {
    marginTop: '20px',
    fontSize: '60px',
    color: YELLOW,
  };

  const h2Styles = {
    color:WHITE,
    margin: '20px 0 0',
    padding: '0',
  };

  const priceStyles = {
    fontSize: '60px',
    color: YELLOW,
    margin: '10px 0',
    padding: '0',
  };

  const ulStyles = {
    margin: '20px 0',
    padding: '0',
    listStyle: 'none',
  };

  const liStyles = {
    color: WHITE,
    padding: '10px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const btnStyles = {
    display: 'inline-block',
    background: YELLOW,
    color: BLACK,
    fontWeight: 'bold',
    padding: '10px 30px',
    marginTop: '20px',
    textDecoration: 'none',
    borderRadius: '20px',
  };


export const PricingBoxes = () => {

  const [isPressed, setPressed] = useState(false);

  const btnStyles = {
    display: 'inline-block',
    background: isPressed ? 'black' : '#D4AE42', // Cambia el color de fondo al presionar
    color: isPressed ? 'BLACK' : 'WHITE', // Cambia el color del texto al presionar
    border: isPressed ? '20px solid whites' : '4px solid white', // Cambia el contorno al presionar
    fontWeight: 'bold',
    padding: '10px 30px',
    marginTop: '20px',
    textDecoration: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  };

    const handleRegister = (value) => {
        // Llamar a la función para enviar el valor al contrato inteligente
     //   sendValueToContract(value);
      };


  return (
<div style={containerStyles} className="container">
      <div style={boxStyles} className="box">
        <div className="title">
          <i className="fa fa-paper-plane" aria-hidden="true" style={titleStyles}></i>
          <h2 style={h2Styles} >Basic</h2>
        </div>
        <div className="price">
          <h4 style={priceStyles}><sup>$</sup>390</h4>
        </div>
        <div className="option">
        <ul style={ulStyles}>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Adquisición de un NFT</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Formación en formato GIF</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Ganancias de tres niveles: 20%, 15%, 10%</li>
  <li style={liStyles}><i className="fa fa-times" aria-hidden="true"></i>Sin soporte</li>
</ul>

        </div>
        <a href="#" className="btn" style={btnStyles} onClick={() => handleRegister(390)}>Empezar</a>
      </div>
      <div style={boxStyles} className="box">
        <div className="title">
          <i className="fa fa-plane" aria-hidden="true"></i>
          <h2  style={h2Styles}>Avanzado</h2>
        </div>
        <div className="price">
          <h4 style={priceStyles}><sup>$</sup>1950</h4>
        </div>
        <div className="option">
        <ul style={ulStyles}>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Dos NFTs por sesión de formación</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Cinco sesiones de formación</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Ganancias de cuatro niveles: 25%, 15%, 10%, 5%</li>
  <li style={liStyles}><i className="fa fa-times" aria-hidden="true"></i> Sin soporte</li>
</ul>

        </div>
        <a href="#" className="btn" style={btnStyles} onClick={() => handleRegister(1950)}>Empezar</a>
      </div>
      <div style={boxStyles} className="box">
        <div className="title">
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <h2  style={h2Styles}>Universitario</h2>
        </div>
        <div className="price">
          <h4 style={priceStyles}><sup>$</sup>3900</h4>
        </div>
        <div className="option">
        <ul style={ulStyles}>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Diez sesiones de formación</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Dos NFT por sesión de formación</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Ganancias de cuatro niveles: 30%, 15%, 10%, 5%</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Soporte</li>
</ul>

        </div>
        <a href="#" className="btn"style={btnStyles} >Empezar</a>
      </div>
      <div style={boxStyles} className="box">
        <div className="title">
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <h2  style={h2Styles}>Master</h2>
        </div>
        <div className="price">
          <h4 style={priceStyles}><sup>$</sup>5800</h4>
        </div>
        <div className="option">
        <ul style={ulStyles}>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Quince sesiones de formación</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Cinco NFT por sesión de formación</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Ganancias de cuatro niveles: 30%, 15%, 10%, 5%</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Soporte</li>
</ul>

        </div>
        <a href="#" className="btn"style={btnStyles} >Empezar</a>
      </div>
      <div style={boxStyles} className="box">
        <div className="title">
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <h2  style={h2Styles}>Premium</h2>
        </div>
        <div className="price">
          <h4 style={priceStyles}><sup>$</sup>25000</h4>
        </div>
        <div className="option">
        <ul style={ulStyles}>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>120 NFTs</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Acceso a formación continua</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Acceso a un certificado oficial</li>
  <li style={liStyles}><i className="fa fa-check" aria-hidden="true"></i>Ganancias multinivel: 30%, 15%, 10%, 5%, 3%, 2%</li>
</ul>

        </div>
        <a href="#" className="btn"style={btnStyles} >Empezar</a>
      </div>
    </div>
  );
};

