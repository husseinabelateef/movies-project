import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = (props) => {

 
    return (
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
            <Link className="mx-3" to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            </Nav>
        </Container>
      </Navbar>
      </>
    );
};

export default Header;