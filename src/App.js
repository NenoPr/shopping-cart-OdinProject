import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import About from "./components/About";
import ShopProductDetails from "./components/ShopProductDetails";
import AllProducts from "./components/ProductsData";
import uniqid from "uniqid"
import "./App.css";

const App = () => {
  const [products, setProducts] = useState(AllProducts);
  const [cart, setCart] = useState([]);
  const [lastLocation, setLastLocation] = useState("")

  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-nav-bar">
          <NavBar props={cart}/>
        </div>
        <div className="app-content-container">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/shop"} element={<Shop items={{products, cart, setCart, setLastLocation}} />} />
            <Route path={`/shop/:categories`} element={<Shop items={{products, cart, setCart, setLastLocation}} />} />
            <Route path={`/shop/:categories/:product`} element={<ShopProductDetails props={lastLocation}/>} />
          </Routes>
        </div>
        <footer className="app-footer">Footer Content</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
