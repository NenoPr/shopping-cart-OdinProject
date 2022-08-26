import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import About from "./components/About";
import AllProducts from "./components/ProductsData";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState(AllProducts);
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-nav-bar">
          <NavBar props={cart}/>
        </div>
        <div className="app-content-container">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/shop"} element={<Shop items={{products, cart, setCart}} />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </div>
        <footer className="app-footer">Footer Content</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
