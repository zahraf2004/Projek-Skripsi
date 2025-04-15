// Header.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'; // CSS khusus komponen
import logo from "../../src/assets/Logo.png"

const Header = () => {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="Klinik Dr. Yanti"
          />
        </Navbar.Brand>
        <span>Klinik Pratama Dokter Yanti</span>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/layanan">Layanan</Nav.Link>
            <Nav.Link as={Link} to="/dokter">Dokter</Nav.Link>
            <Nav.Link as={Link} to="/jadwal">Jadwal</Nav.Link>
            <Nav.Link as={Link} to="/kontak">Kontak</Nav.Link>
            <Button className="login-btn">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;