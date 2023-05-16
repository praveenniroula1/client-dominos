import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Payment = () => {
  return (
    <div>
      {" "}
      <Form className="deliveryForm ">
        <h4 className="item6">
          Payment Details: <i class="fa-sharp fa-regular fa-credit-card"></i>
        </h4>

        <Form.Group className="mb-3 item1">
          <Form.Control placeholder="Amount $$$" />
        </Form.Group>
        <Form.Group className="mb-3 item2">
          <Form.Control placeholder="Expiry Date" />
        </Form.Group>
        <Form.Group className="mb-3 item3">
          <Form.Control placeholder="Card Number" />
        </Form.Group>
        <Form.Group className="mb-3 item4">
          <Form.Control placeholder="CCV" />
        </Form.Group>
        <Form.Group className="mb-3 item5">
          <Form.Control placeholder="Full Name" />
        </Form.Group>
        <Button className="item7" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Payment;
