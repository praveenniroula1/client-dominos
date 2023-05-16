import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Hiring from "./Components/Hiring";
import PickUpDelivery from "./Components/PickUpDelivery";
import DeliveryPage from "./Pages/DeliveryPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import MenuItem from "./Pages/MenuItem";
import AddToCart from "./Pages/AddToCart";
import Payment from "./Pages/Payment";

function App() {
  return (
    <div className="App">
      <Header />
      <PickUpDelivery />
      <Hero />
      <Hiring />
      <Footer />
      <Menu />
      <DeliveryPage />
      <MenuItem />
      <AddToCart />
      <Payment />
    </div>
  );
}

export default App;
