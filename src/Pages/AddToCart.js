import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddToCart = () => {
  return (
    <div>
      <Form className="deliveryForm ">
        <h4 className="item6">Order Details</h4>
        <div className="store ">
          <i class="homee fa-solid fa-home  fs-1 "></i> Domino's Adelaide{" "}
          <br></br>
          <div className="open">Currently Open</div>
          <hr className="line"></hr>
          <div className="">1 X Big Cheese </div>{" "}
          <Button variant="none" className="text-danger fs-0 fw-bold">
            Remove
          </Button>{" "}
          <span>
            <Button variant="none" className="text-primary fs-0 fw-bold">
              Edit
            </Button>{" "}
            <span>
              {" "}
              <div className="text-end">$18.99</div>
            </span>
          </span>
          <hr className="line"></hr>
          <div className="">1 X Peri Peri Chicken </div>{" "}
          <Button variant="none" className="text-danger fs-0 fw-bold">
            Remove
          </Button>{" "}
          <span>
            <Button variant="none" className="text-primary fs-0 fw-bold">
              Edit
            </Button>{" "}
            <span>
              {" "}
              <div className="text-end">$17.99</div>
            </span>
          </span>
          <hr className="line"></hr>
          <div className="">1 X BBQ Cheese </div>{" "}
          <Button variant="none" className="text-danger fs-0 fw-bold">
            Remove
          </Button>{" "}
          <span>
            <Button variant="none" className="text-primary fs-0 fw-bold">
              Edit
            </Button>{" "}
            <span>
              {" "}
              <div className="text-end">$10.99</div>
            </span>
          </span>
          <hr className="line"></hr>
          <div className="text-end mt-5">Total: $xxx.xx</div>
        </div>

        <Button className="start item7" variant="success">
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default AddToCart;
