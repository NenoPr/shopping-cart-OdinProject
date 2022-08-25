import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as CartIcon} from '../shopping_cart.svg';
import "./styles/nav-bar.css";

function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div className="nav-content">
      <div>Logo</div>
      <Link to={"/"} style={linkStyle}>
        <div className="nav-links">Home</div>
      </Link>
      <Link to={"/shop"} style={linkStyle}>
        <div className="nav-links">Shop</div>
      </Link>
      <Link to={"/about"} style={linkStyle}>
        <div className="nav-links">About</div>
      </Link>
      <Link to={"/shopping-cart"} style={linkStyle}>
        <div className="nav-links cart-svg"><CartIcon /></div>
      </Link>
    </div>
  );
}

export default NavBar;
