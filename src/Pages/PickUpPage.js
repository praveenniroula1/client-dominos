import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../Components/Footer";

const PickUpPage = () => {
  return (
    <div>
      {/* pickup */}
      <Form className="deliveryForm ">
        <h4 className="item6">Select Pickup Store:</h4>
        <div className="store ">
          <i class="homee fa-solid fa-home  fs-1 "></i> Domino's Adelaide{" "}
          <br></br>
          <div className="open">Currently Open</div>
          <Button className="start item7 mt-3" variant="success">
            Start Order
          </Button>
        </div>
      </Form>
      <Footer />
    </div>
  );
};

export default PickUpPage;
