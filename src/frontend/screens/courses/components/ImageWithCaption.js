import React from 'react';

export const ImageWithCaption = ({ src, alt, caption, size, color, width }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
        marginTop: '20px'
    };

    const imageStyle = {
        width: width || '80%',
        margin: 'auto'
    };

    const captionStyle = {
        fontSize: size || '1em',
        lineHeight: '1.6',
        fontFamily: 'Arial, sans-serif',
        color: color || 'black',
        textAlign: 'justify'
    };

    return (
        <div style={containerStyle}>
            <img src={src} alt={alt} style={imageStyle} />
            <p style={captionStyle}>{caption}</p>
        </div>
    );
};

 
