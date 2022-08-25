import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import About from "./components/About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/shopping-cart"} element={<ShoppingCart />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
