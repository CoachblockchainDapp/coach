import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { BLUE } from '../../components';

const { Item } = Menu;

export const TopNav = ({ backgroundColor, textColor, height,top }) => {
  const menuStyle = {
    backgroundColor: backgroundColor || BLUE,
    color: textColor || BLUE,
    height: height || '40px',
    position: 'fixed',
    top: top||55,
    width: '100%',
    zIndex: 800,
    right:0,
  };

  const itemStyle = {
    ...menuStyle,
    lineHeight: `${height || '40px'}`,
  };

  return (
    <Menu mode="horizontal" style={menuStyle}>
      <Item style={itemStyle}>
        <Link to="/#"></Link>
      </Item>
      {/* Agrega más elementos de menú aquí si es necesario */}
    </Menu>
  );
};


