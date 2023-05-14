import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../Img/logo.png";
import hiring from "../Img/hiring.png";
import samir from "../Img/samir.png";

const Hiring = () => {
  return (
    <div className="hiring container-fluid mt-2">
      <Card className="card1">
        <Card.Img className="hiring-img" variant="top" src={hiring} />
        <Card.Body>
          <Card.Title>Wanna Pizza the Action?</Card.Title>
          <Card.Text>WE ARE HIRING!!!</Card.Text>
        </Card.Body>
        <Button variant="primary"> Find Out More</Button>
      </Card>
      <Card className="card3">
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Text>
            Round up your order to support Domino's registered charity, Give for
            Good
          </Card.Text>
          <Card.Title>
            <i class="handShake fa-solid fa-handshake"></i>
          </Card.Title>
        </Card.Body>
        <Button href="#" variant="primary">
          Find Out More
        </Button>
      </Card>
      <Card className="card2">
        <Card.Img className="hiring-img1" variant="top" src={samir} />
        <Button className="btn" variant="primary">
          {" "}
          Find Out More
        </Button>
      </Card>
    </div>
  );
};

export default Hiring;
