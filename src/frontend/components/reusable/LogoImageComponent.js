import React from 'react';
import logo from '../../public/assets/images/logo/logo.png'; // Ruta a la imagen

export const LogoImageComponent = ({ width, height }) => {
  const imageStyle = {
    width: width || 'auto', // Si no se proporciona un ancho, se establece como 'auto'
    height: height || 'auto', // Si no se proporciona una altura, se establece como 'auto'
  };

  return (
    <div>
      {/* Utilizando la imagen importada y aplicando estilos dinámicos */}
      <img id="logo_header" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" style={{ width: "150px", height: "45px" }} />
    </div>
  );
};


