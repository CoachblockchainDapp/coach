import React from 'react';

// Componente reutilizable para el título
export const Title = ({ children, size, color }) => {
    const titleStyle = {
        fontSize: size || '2.5em',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
        color: color || 'black'
    };

    return <h1 style={titleStyle}>{children}</h1>;
};