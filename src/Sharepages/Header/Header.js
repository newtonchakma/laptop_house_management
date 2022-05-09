import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut =() =>{
    signOut(auth);
  }
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
        <Nav.Link href ="home#contact">Contact Us</Nav.Link>
        <Nav.Link as ={Link} to="inventory">Inventory</Nav.Link>
        <Nav.Link as ={Link} to="blogs">Blogs</Nav.Link>
      

        {
          user && <>
          <Nav.Link as ={Link} to="myItem">MyItem</Nav.Link>
          </>
        }
        {
          user ?   
            <button onClick={handleSignOut} className=''>Sign Out</button>     
          :
          <Nav.Link as ={Link} to="login">Login</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;