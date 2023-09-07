import './MyNavbar.css';
import logo from '../../assets/img/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-black" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo mateico mates" id='logo'/>
          Mateico Mates
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Imperiales</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Torpedo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Camioneros</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Bombillas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Nav.Link href="#cart"><CartWidget/></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;