import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link ><NavLink to=".">Home</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="products">Products</NavLink></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    </>
  )
}

export default Header