import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Img/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className="me">
            <Nav.Link href="#home" className="fw-bold text-dark fs-4 mt-4">
              MENU
            </Nav.Link>
            <Nav.Link href="#features" className="fw-bold text-dark fs-4 mt-4">
              <i class="icon fa-solid fa-user"></i>MY ACCOUNT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
