import './MyNavbar.css';
import logo from '../../assets/img/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" id='nav' variant='dark'>
      <Container>
        <Link to='/' id='brand'>
          <img src={logo} alt="logo mateico mates" id='logo' />
          Mateico Mates
        </Link>
        <Navbar.Brand id='slogan'>Cada mate está lleno de historias...</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="navdrop">
              <NavDropdown.Item>
                <Link to='/' className='droplink'>Todo</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/Imperiales' className='droplink'>Imperiales</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/Torpedos' className='droplink'>Torpedos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/Camioneros' className='droplink'>Camioneros</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to='/Bombillas' className='droplink'>Bombillas</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to='/nosotros' className='navlink'>Nosotros</Link>
          </Nav>
          <Nav.Link><CartWidget /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;