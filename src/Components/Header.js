import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/Menu"
                className="nav-link fw-bold text-dark fs-4 mt-4 mx-3 mx-lg-4"
              >
                MENU
              </Link>
              <Nav.Link
                href="#"
                className="fw-bold text-dark fs-4 mt-4 mx-3 mx-lg-4 d-flex flex-row-reverse justify-content-end align-items-center"
              >
                {" "}
                <i class="icon fa-solid fa-user me-2"></i>MY ACCOUNT{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {}
    </div>
  );
};

export default Header;
