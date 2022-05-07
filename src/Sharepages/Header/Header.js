import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="home#home">Home</Nav.Link>
        <Nav.Link href="home#product">Product</Nav.Link>
        <Nav.Link as ={Link} to="inventory">Inventory</Nav.Link>
        <Nav.Link href ="home#contact">Contact Us</Nav.Link>

        <Nav.Link as ={Link} to="login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;