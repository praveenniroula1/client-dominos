import React from "react";

const PickUpDelivery = () => {
  return (
    <div className="pickupOption container-fluid bg-dark text-light">
      <div className="twoOption">
        <div className="delivery">
          <i class="fa-solid fa-truck"></i> DELIVERY
        </div>
        <div className="pickup">
          <i class="fa-solid fa-warehouse"></i> PICK UP
        </div>
      </div>
    </div>
  );
};

export default PickUpDelivery;
