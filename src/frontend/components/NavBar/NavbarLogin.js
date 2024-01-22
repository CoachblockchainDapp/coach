import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Logo, WidthSpacer } from '../../components'

const navbarStyle = {
    backgroundColor: '#0A5364',
    // Puedes agregar más estilos aquí si es necesario
};


export const NavigationLogin = ({ web3Handler, account }) => {



    const handleButtonClick = () => {
        if (account) {
            // Redirigir a otra página HTML
            window.location.href = '../src/index.html';
        } else {
            // Si 'account' no es positivo, ejecutar la lógica para conectar el monedero
            web3Handler();
        }
    };

    return (
        <Navbar expand="lg" style={navbarStyle} variant="dark"  className="fixed-top">
            <Container>
                <Navbar.Brand>
                <Logo width="110px" height="40px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar navbar-dark bg-primary" />
                <Navbar.Collapse id="navbar navbar-dark bg-primary">
                <Nav className="me-auto">
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/membership">Membership</Nav.Link>
                                <Nav.Link as={Link} to="/classrooms">classrooms</Nav.Link>
                                <Nav.Link as={Link} to="/nft-details">NFTs</Nav.Link>
                                <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
                                <Nav.Link as={Link} to="/nft-details">Purchases</Nav.Link>
                                <Nav.Link as={Link} to="/my-purchase">Referral</Nav.Link>
                                <Nav.Link as={Link} to="/Basic-Course">Cursos</Nav.Link>
                             
                               
                            </Nav>
                    <Nav>
                        {account ? (
                            
                             <><Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                    <Button variant="outline-light">
                                        {account}
                                    </Button>
                                </Nav.Link></>
                         
                        ) : (
                            <>
                                <Button onClick={handleButtonClick} variant="outline-light">
                                    Connect Wallet
                                </Button>
                             
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

