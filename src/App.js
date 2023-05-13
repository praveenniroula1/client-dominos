import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Hiring from "./Components/Hiring";
import PickUpDelivery from "./Components/PickUpDelivery";

function App() {
  return (
    <div className="App">
      <Header />
      <PickUpDelivery />
      <Hero />
      <Hiring />
      <Footer />
    </div>
  );
}

export default App;
