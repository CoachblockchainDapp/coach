import React from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Logo, WidthSpacer } from '../../components';
import styled from 'styled-components';

// Estilos para la barra de navegación
const StyledNavbar = styled(Navbar)`
    background-color: #0A5364;
`;

// Estilos para los enlaces de navegación activos
// Estilos para los enlaces de navegación activos
const StyledNavLink = styled(NavLink)`
    color: #fff; /* Texto blanco por defecto */

    &:hover {
        color: #D4AE42 !important; /* Texto negro al pasar el ratón */
    }

    &.active {
        background-color: yellow !important;
        color: #000 !important; /* Texto negro cuando está activo */
    }

    span {
        font-size: 18px;
        margin-right: 10px; /* Agrega un margen derecho para separar los enlaces */
    }
`;


// Estilos para los botones
// Estilos para los botones
// Estilos para los botones
const StyledButton = styled(Button)`
   && {
      border: 2px solid #fff; /* Cambia el color del borde a blanco */
      border-radius: 20px;
      color: #fff; /* Cambia el color del texto a blanco */
      font-size: 12px;
      height: 40px;
      padding: 10px 20px;
      transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s; /* Agrega transiciones suaves */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Agrega sombra por defecto */
   }

   &&:hover {
      background-color: #d4ae42; /* Cambia el color de fondo al pasar el ratón a amarillo */
      color: #000; /* Cambia el color del texto a negro al pasar el ratón */
      border-color: #000; /* Cambia el color del borde a negro al pasar el ratón */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Ajusta la sombra al pasar el ratón */
   }
`;





export const Navigation = ({ web3Handler, account }) => {
    const navigate = useNavigate();

    const handleRegistroClick = () => {
        navigate('/packages');
    };

    return (
        <>
            <StyledNavbar expand="lg" variant="dark" className="fixed-top">
                <Container>
                    <Navbar.Brand>
                        <Logo width="110px" height="40px" />
                   
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar navbar-dark bg-primary" />
                    <Navbar.Collapse id="navbar navbar-dark bg-primary">
                        <Nav className="me-auto">
                            <StyledNavLink as={Link} to="/" activeClassName="active">
                                <span style={{ fontSize: '16px'}}>Inicio</span>
                            </StyledNavLink>
                            <StyledNavLink as={Link} to="/community" activeClassName="active">
                                <span style={{ fontSize: '16px' }}>Comunidad</span>
                            </StyledNavLink>
                            <StyledNavLink as={Link} to="/explore" activeClassName="active">
                                <span style={{ fontSize: '16px' }}>NFTs</span>
                            </StyledNavLink>
                            <StyledNavLink as={Link} to="/detalles" activeClassName="active">
                                <span style={{ fontSize: '16px' }}>Detalles</span>
                            </StyledNavLink>
                            <StyledNavLink as={Link} to="/formacion" activeClassName="active">
                                <span style={{ fontSize: '16px' }}>Formaciones</span>
                            </StyledNavLink>
                            <StyledNavLink as={Link} to="/contact-us" activeClassName="active">
                                <span style={{ fontSize: '16px' }}>Contacto</span>
                            </StyledNavLink>
                        </Nav>
                        <Nav>
                            {account ? (
                                <Nav.Link
                                    href={`https://etherscan.io/address/${account}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button nav-button btn-sm mx-4">
                                    <StyledButton variant="outline-light">{account}</StyledButton>
                                </Nav.Link>
                            ) : (
                                <>
                                    <StyledButton onClick={handleRegistroClick} variant="outline-light">
                                        Registro
                                    </StyledButton>
                                    <WidthSpacer width="10px" />
                                    <StyledButton onClick={web3Handler} variant="outline-light">
                                        Conectar Wallet
                                    </StyledButton>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </StyledNavbar>
        </>
    );
};
