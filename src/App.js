import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import ShopProductDetails from "./components/ShopProductDetails";
import Checkout from "./components/Checkout";
import AllProducts from "./components/ProductsData";
import PurchaseCompleted from "./components/PurchaseCompleted";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState(AllProducts);
  const [cart, setCart] = useState([]);
  const [lastLocation, setLastLocation] = useState("")

  return (
    <HashRouter>
      <div className="App">
        <div className="app-nav-bar">
        <NavBar props={{cart, setCart}} />
        </div>
        <div className="app-content-container">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/shop"} element={<Shop items={{products, cart, setCart, setLastLocation}} />} />
            <Route path={`/shop/:categories`} element={<Shop items={{products, cart, setCart, lastLocation, setLastLocation}} />} />
            <Route path={`/shop/:categories/:product`} element={<ShopProductDetails props={{lastLocation, cart, setCart}}/>} />
            <Route path={"/checkout"} element={<Checkout props={{cart, setCart}}/>} />
            <Route path={"/purchase-completed"} element={<PurchaseCompleted props={{cart,setCart}} />} />
          </Routes>
        </div>
        <footer className="app-footer">Footer Content</footer>
      </div>
    </HashRouter>
  );
};

export default App;
