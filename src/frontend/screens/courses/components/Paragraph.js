import React from 'react';

export const Paragraph = ({ children, size, color }) => {
    const paragraphStyle = {
        fontSize: size || '1.2em',
        lineHeight: '1.6',
        fontFamily: 'Arial, sans-serif',
        color: color || 'black',
        textAlign: 'justify'
    };

    return <p style={paragraphStyle}>{children}</p>;
};

 
