import React from "react";
import { Link } from "react-router-dom";

const PickUpDelivery = () => {
  return (
    <div className="pickupOption container-fluid bg-dark text-light">
      <div className="twoOption">
        <div className="delivery">
          <Link className="nav-link" to="/DeliveryPage">
            <i class="fa-solid fa-truck"></i> DELIVERY
          </Link>
        </div>
        <div className="pickup">
          <Link className="nav-link" to="/PickUpPage">
            <i class="fa-solid fa-warehouse"></i> PICK UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PickUpDelivery;
