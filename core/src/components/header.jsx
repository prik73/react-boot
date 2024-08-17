import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imglogo from "../assets/images/site/logo.jpg";

export default function AppHeader() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/home" onClick={closeNavbar}>
          <img src={imglogo} alt="Your Company Logo" className="navbar-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" onClick={closeNavbar}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={closeNavbar}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={closeNavbar}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={closeNavbar}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to='/donate-us' onClick={closeNavbar}>Donate-us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}