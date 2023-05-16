import React from "react";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bg1 from "../Img/bg1.png";

const MenuItem = () => {
  return (
    <div className="cards d-flex justify-content-center align-items-center flex-wrap ">
      <Card
        style={{
          width: "25rem",
          height: "50vh",
          marginLeft: "2rem",
          marginTop: "1rem",
          boxShadow: "1rem 0.5rem 1rem black",
        }}
      >
        <Card.Img variant="top" src={bg1} />
        <Card.Body>
          <Card.Title>Peri Peri Chicken</Card.Title>
          <Card.Text>
            A flavoursome pairing of seasoned chicken pieces, tomato, sliced red
            onion & baby spinach, topped with our addictive peri peri sauce
          </Card.Text>
        </Card.Body>
        <Button variant="danger">Order Now</Button>
      </Card>
      <Card
        style={{
          width: "25rem",
          height: "50vh",
          marginLeft: "2rem",
          marginTop: "1rem",
          boxShadow: "1rem 0.5rem 1rem black",
        }}
      >
        <Card.Img variant="top" src={bg1} />
        <Card.Body>
          <Card.Title>BBQ Chicken</Card.Title>
          <Card.Text>
            A flavoursome pairing of seasoned chicken pieces, tomato, sliced red
            onion & baby spinach, topped with our addictive peri peri sauce
          </Card.Text>
        </Card.Body>
        <Button variant="danger">Order Now</Button>
      </Card>
      <Card
        style={{
          width: "25rem",
          height: "50vh",
          marginLeft: "2rem",
          marginTop: "1rem",
          boxShadow: "1rem 0.5rem 1rem black",
        }}
      >
        <Card.Img variant="top" src={bg1} />
        <Card.Body>
          <Card.Title>Fajita Chicken</Card.Title>
          <Card.Text>
            A flavoursome pairing of seasoned chicken pieces, tomato, sliced red
            onion & baby spinach, topped with our addictive peri peri sauce
          </Card.Text>
        </Card.Body>
        <Button variant="danger">Order Now</Button>
      </Card>
      <Card
        style={{
          width: "25rem",
          height: "50vh",
          marginLeft: "2rem",
          marginTop: "1rem",
          boxShadow: "1rem 0.5rem 1rem black",
        }}
      >
        <Card.Img variant="top" src={bg1} />
        <Card.Body>
          <Card.Title>Camembert Chicken</Card.Title>
          <Card.Text>
            A flavoursome pairing of seasoned chicken pieces, tomato, sliced red
            onion & baby spinach, topped with our addictive peri peri sauce
          </Card.Text>
        </Card.Body>
        <Button variant="danger">Order Now</Button>
      </Card>
    </div>
  );
};

export default MenuItem;
