import "./App.css";
import Check from "./components/Check";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Carts from "./components/Carts";
import Success from "./components/Success";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/cart" element={<Carts />} />
        <Route exact path="/checkout" element={<Check />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
