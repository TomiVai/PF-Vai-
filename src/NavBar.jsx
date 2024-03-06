// Navbar.jsx
import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">Mi Tienda</Link>
        <Nav className="me-auto">
          <Link to="/placas-de-video" className="nav-link">Placas de Video</Link>
          <Link to="/monitores" className="nav-link">Monitores</Link>
          <Link to="/otros" className="nav-link">Otros</Link>
          <Link to="/cart" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Carrito</span>
          </Link>
        </Nav>
        <CartWidget />
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
