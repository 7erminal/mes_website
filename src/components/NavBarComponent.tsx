import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import SecondaryButton from "./widgets/SecondaryButton";
// @ts-ignore
import { ROUTES } from "../apis/endpoints";
import { Link } from "react-router-dom";

const NavBarComponent: React.FC = ()=>{
    return <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">MES</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            
        </Nav>
        <Nav>
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Bulk SMS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                USSD Solution
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">E-Payments</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Mobile App Development
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">Developer</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link href={ROUTES.login}>Login</Nav.Link>
            <SecondaryButton title="Sign Up" type="button" navigateTo={()=>{window.location = ROUTES.signUp}} />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavBarComponent;