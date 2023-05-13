import React from "react";
import pastas from "../Img/pastas.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Hero = () => {
  return (
    <div className="hero container">
      {/* left */}
      <div className="container">
        <img className="pastas" src={pastas} alt="pastas"></img>
      </div>
      {/* right */}
      <div className="hero-left">
        {/* top */}
        <div className="bg-card1">
          <Card className="my-card">
            <Card.Body>
              <Card.Title>
                {" "}
                <div className="wrapping">
                  {" "}
                  <i class="fa-solid fa-truck"></i> Delivery Deals
                  <h3>3 LARGE VALUE PIZZAS</h3>
                </div>
              </Card.Title>

              <h4 className="h4 ">UPGRADE TO PASTAS FROM $2*</h4>
              <h2 className="h4 ">From $27*</h2>
              <Button variant="primary">START AN ORDER</Button>
              <h6 className="h4 fs-6">*View Terms and Conditions</h6>
            </Card.Body>
          </Card>
        </div>
        {/* botom */}
        <div className="bg-card2 mt-1">
          <Card className="my-card2">
            <Card.Body>
              <div className="wrapping">
                {" "}
                <i class="fa-solid fa-truck"></i> Pick-Up Deals
                <h3>3 LARGE VALUE PIZZAS</h3>
              </div>
              <h4 className="h4">UPGRADE TO PASTAS FROM $2*</h4>
              <h2 className="h4">From $18*</h2>
              <Button variant="danger">START AN ORDER</Button>
              <h6 className="h4 fs-6">*View Terms and Conditions</h6>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
