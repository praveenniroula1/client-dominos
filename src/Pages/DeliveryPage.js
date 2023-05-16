import React from "react";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DeliveryPage = () => {
  return (
    <div>
      <Form className="deliveryForm">
        <h4 className="item6">DELIVERY ADDRESS:</h4>
        <Form.Group className="mb-3 item1">
          <Form.Control placeholder="Unit Number" />
        </Form.Group>

        <Form.Group className="mb-3 item2">
          <Form.Control placeholder="Street Number" />
        </Form.Group>
        <Form.Group className="mb-3 item3">
          <Form.Control placeholder="Street" />
        </Form.Group>
        <Form.Group className="mb-3 item4">
          <Form.Control placeholder="Suburb" />
        </Form.Group>
        <Form.Group className="mb-3 item5">
          <Form.Control placeholder="Postcode" />
        </Form.Group>

        <Button className="item7" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="text-center mt-2">
        {" "}
        Order ID: e9de452d-91ff-4849-bf1d-e13053ef9801{" "}
      </div>

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
    </div>
  );
};

export default DeliveryPage;