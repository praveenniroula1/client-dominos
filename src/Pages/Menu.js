import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import MenuItem from "./MenuItem";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deliveryDetailsAction } from "../ReduxStore/ReducerActions/deliveryDetailsAction";
import DeliveryPage from "./DeliveryPage";

const Menu = () => {
  const { formData } = useSelector((state) => state.deliveryDetails);
  return (
    <div>
      {formData ? (
        <div
          className="d-flex justify-content-center align-items-center mt-3 fw-bold bg-dark text-light text-center mb-4 flex-wrap"
          style={{ gap: "1rem" }}
        >
          <p>Unit: {formData.Unit} </p>
          <p>Street Number: {formData.StreetNumber} </p>
          <p>Street: {formData.Street}</p>
          <p>Suburb: {formData.Suburb}</p>
          <p>Postcode: {formData.Postcode}</p>
        </div>
      ) : null}

      {/* dont touch */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="m-auto">
            PIZZAS
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="m-auto">
            Bread
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="m-auto">
            Drinks
          </Navbar.Brand>
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
      <MenuItem />
      <Footer />
    </div>
  );
};

export default Menu;
