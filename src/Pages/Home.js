import React from "react";
import Header from "../Components/Header";
import PickUpDelivery from "../Components/PickUpDelivery";
import Hero from "../Components/Hero";
import Hiring from "../Components/Hiring";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <PickUpDelivery />
      <Hero />
      <Hiring />
      <Footer />
    </div>
  );
};

export default Home;
