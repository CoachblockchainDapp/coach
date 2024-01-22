import React from 'react';

export const Logo = ({ width, height }) => {
  const imageUrl = 'https://raw.githubusercontent.com/coachblockchain/Images/main/COACH%20ORO.png';

  return (
    <img
      src={imageUrl}
      alt="Logo"
      style={{ width: width, height: height }}
    />
  );
};


