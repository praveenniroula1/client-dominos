import "./App.css";
import Header from "./Components/Header";
import PickUpDelivery from "./Components/PickUpDelivery";
import DeliveryPage from "./Pages/DeliveryPage";
import Menu from "./Pages/Menu";
import AddToCart from "./Pages/AddToCart";
import Payment from "./Pages/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PickUpPage from "./Pages/PickUpPage";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/PickUpDelivery" element={<PickUpDelivery />} />
          <Route path="/DeliveryPage" element={<DeliveryPage />} />
          <Route path="/PickUpPage" element={<PickUpPage />} />
          <Route path="/AddToCart" element={<AddToCart />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
