import React from 'react';

export const Subtitle = ({ children, size, color }) => {
    const subtitleStyle = {
        fontSize: size || '1.5em',
        marginBottom: '15px',
        fontFamily: 'Arial, sans-serif',
        color: color || 'black'
    };

    return <h3 style={subtitleStyle}>{children}</h3>;
};

 
