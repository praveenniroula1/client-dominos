import React, { useState } from "react";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData } from "../ReduxStore/ReduxSlice/deliveryDetailsSlice";

const DeliveryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [rndm, setRndm] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormData(form);
    const Newrndm = Math.floor(Math.random() * 500000000000);
    setRndm(Newrndm);
    navigate("/Menu");
    dispatch(setFormData(form));
  };

  return (
    <div>
      <Form className="deliveryForm" onSubmit={handleOnSubmit}>
        <h4 className="item6">DELIVERY ADDRESS:</h4>
        <Form.Group className="mb-3 item1">
          <Form.Control
            onChange={handleOnChange}
            name="Unit"
            placeholder="Unit Number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 item2">
          <Form.Control
            onChange={handleOnChange}
            name="StreetNumber"
            placeholder="Street Number"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 item3">
          <Form.Control
            onChange={handleOnChange}
            name="Street"
            placeholder="Street"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 item4">
          <Form.Control
            onChange={handleOnChange}
            name="Suburb"
            placeholder="Suburb"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 item5">
          <Form.Control
            onChange={handleOnChange}
            name="Postcode"
            placeholder="Postcode"
            required
          />
        </Form.Group>

        <Button type="submit" className="item7" variant="primary">
          Submit
        </Button>
      </Form>

      {rndm && (
        <div className="text-center mt-2 mb-4">
          <span className="fw-bold">Order ID:</span> {rndm}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DeliveryPage;
