import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavBarContactComponent: React.FC = ()=>{
    return <Navbar expand="lg" variant="light" className="bg-body-tertiary">
    <Container>
      <Navbar id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#link">Tema, Accra, Ghana</Nav.Link>
          <Nav.Link href="#link">+233 303 224 453</Nav.Link>
          <Nav.Link href="#link">info@mes.com</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  </Navbar>
}

export default NavBarContactComponent