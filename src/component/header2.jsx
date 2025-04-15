
// src/component/Header.jsx
import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../src/assets/Logo.png"
import './header2.css'; // CSS khusus komponen

function Header() {
  return (
    <header className="main_menu home_menu"  >
      <Navbar expand="lg" className="shadow-sm" >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" height="50" />
          </Navbar.Brand>
          <span className="first">Klinik Pratama&nbsp;</span>
          <span className="last">Dokter Yanti</span>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="justify-content-center">
            <Nav className="align-items-center">
              <Nav.Link as={Link} to="/" active>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/doctor">Doctors</Nav.Link>

              <NavDropdown title="Pages" id="pages-dropdown">
                <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dep">Departments</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/elements">Elements</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Blog" id="blog-dropdown">
                <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/single-blog">Single Blog</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button variant="primary" className="d-none d-lg-block">Sign In</Button>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
