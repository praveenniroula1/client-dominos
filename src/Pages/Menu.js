import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Header from "../Components/Header";

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PIZZAS</Navbar.Brand>
        </Container>
      </Navbar>
      <br></br>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Premium Pizza</Navbar.Brand>
          <Navbar.Brand href="#home">Traditional Pizza</Navbar.Brand>
          <Navbar.Brand href="#home">Value Range</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
