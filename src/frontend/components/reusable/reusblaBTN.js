import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ReusableButton = ({
  backgroundColor,
  hoverColor,
  textColor,
  text,
  linkTo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const buttonStyles = {
    margin: "20px",
    width: "130px",
    height: "45px",
    color: textColor || "#fff",
    borderRadius: "5px",
    padding: "10px 25px",
    fontFamily: "Lato, sans-serif",
    fontSize:"12px",
  
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: isHovered ? "2px solid #007BFF" : "2px solid transparent",
    background: isHovered ? hoverColor : backgroundColor,
    boxShadow: isHovered
      ? `inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px ${hoverColor.replace(
          "rgba",
          "rgba(0,0,0,.1)"
        )}`
      : "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
  };

  // Estilo personalizado para los enlaces
  const linkStyles = {
    textDecoration: "none", // Elimina la decoración de texto
  };

  return (
    <Link to={linkTo} style={linkStyles}>
      <button
        style={buttonStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {text || "Button Text"}
      </button>
    </Link>
  );
};
