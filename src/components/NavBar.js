import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { ReactComponent as CartIcon } from "../shopping_cart.svg";
import "./styles/nav-bar.css";

function NavBar(appProps) {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  console.log("appProps for NavBar", appProps);
  const [navCart, setNavCart] = useState(appProps.props);

  useEffect(() => {
    setNavCart(appProps.props);
  }, [appProps]);

  function displayCart() {
    let cartDisplayStatus = document.getElementById("cart");
    if (cartDisplayStatus.classList.contains("toggle-cart-display"))
      cartDisplayStatus.classList.remove("toggle-cart-display");
    else cartDisplayStatus.classList.add("toggle-cart-display");
  }

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
      <div className="nav-links cart-svg" onClick={displayCart}>
        <CartIcon />
      </div>
      <div className="toggle-cart-display" id="cart">
        <div className="shopping-cart-container">
          <div className="close-shopping-cart" onClick={displayCart}>
            Close X
          </div>
          <div className="shopping-cart-headline">Shopping Cart</div>
          <div className="shopping-cart-article-list">
            {navCart.map((item) => (
              <div className="shopping-cart-item" key={uniqid()}>
                <div className="shopping-cart-product-name">
                  {item.productName}
                </div>
                <div className="shopping-cart-product-amount-container">
                  <div className="shopping-cart-product-amount-control">+</div>
                  <div className="shopping-cart-product-amount">
                    {item.amount}
                  </div>
                  <div className="shopping-cart-product-amount-control">-</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
