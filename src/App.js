import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-nav-bar">
          <NavBar />
        </div>
        <div className="app-content-container">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/shop"} element={<Shop />} />
            <Route path={"/shopping-cart"} element={<ShoppingCart />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </div>
        <footer className="app-footer">Footer Content</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
