
import React from 'react';


export const ReusableText = ({ fontFamily, fontSize, text }) => {


  const textStyle = {
    fontFamily: fontFamily || 'Arial, sans-serif',
    fontSize: fontSize || '24px', // Puedes ajustar el tamaño predeterminado aquí
    // Agrega aquí más estilos si es necesario
    textAlign: 'center',
  };
  
  
    return <p style={textStyle}>{text}</p>;
  };


  
  export const CustomHeader = ({ children, fontFamily, fontSize, color }) => {

    const goldenTextStyle = {
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: '3rem',
      maxWidth: '1000px',
      textAlign: 'justify', // Centra el texto horizontalmente
      margin: '0 auto', // Centra el contenedor horizontalmente usando margin
      color: '#feab3a',
    };
    
  


  
    return (
      <div >
        <h2 style={goldenTextStyle}>{children}</h2>
      </div>
    );
   
  };
  