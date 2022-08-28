import React, { useState, useEffect, useTransition } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { ReactComponent as CartIcon } from "../shopping_cart.svg";
import "./styles/nav-bar.css";

function NavBar(appProps) {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  const [totalPrice, setTotalPrice] = useState(0);
  console.log("appProps for NavBar", appProps);

  useEffect(() => {
    let totalAmount = 0;
    appProps.props.cart.map((obj) => {
      totalAmount += obj.price * obj.amount;
    });
    setTotalPrice(totalAmount);
  }, [appProps]);

  function displayCart() {
    let cartDisplayStatus = document.getElementById("cart");
    if (cartDisplayStatus.classList.contains("toggle-cart-display"))
      cartDisplayStatus.classList.remove("toggle-cart-display");
    else cartDisplayStatus.classList.add("toggle-cart-display");
  }

  function incrementCart(e) {
    let itemId = e.target.getAttribute("item");
    document.getElementById(itemId).value++;
    let newState = appProps.props.cart.map((obj) => {
      console.log("obj.id", obj.id);
      if (obj.id === itemId) {
        return { ...obj, amount: obj.amount + 1 };
      } else return obj;
    });
    appProps.props.setCart(newState);
  }

  function decrementCart(e) {
    let itemId = e.target.getAttribute("item");
    if (document.getElementById(itemId).value < 2) return;
    document.getElementById(itemId).value--;
    let newState = appProps.props.cart.map((obj) => {
      console.log("obj.id", obj.id);
      if (obj.id === itemId) {
        return { ...obj, amount: obj.amount - 1 };
      } else return obj;
    });
    appProps.props.setCart(newState);
  }

  function handleCartAmount(e) {
    if (e.target.value < 1) e.target.value = 1;

    let newState = appProps.props.cart.map((obj) => {
      console.log("obj.id", obj.id);
      if (obj.id === e.target.id) {
        return { ...obj, amount: Number(e.target.value) };
      } else return obj;
    });
    appProps.props.setCart(newState);
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
        <div className="shopping-cart-header-container">
          <div className="shopping-cart-headline">Shopping Cart</div>
          <span className="close-shopping-cart" onClick={displayCart}>
            Close
          </span>
        </div>
        <div className="shopping-cart-article-list">
          {appProps.props.cart.map((item) => (
            <div className="shopping-cart-item" key={item.id}>
              <div className="shopping-cart-image-container">
                <img
                  className="shopping-cart-img"
                  src={item.location}
                  alt={item.productName}
                />
              </div>
              <div className="shopping-cart-product-info">
                <div className="shopping-cart-product-name">
                  {item.productName}
                </div>
                <div className="shopping-cart-product-amount-container">
                  <div
                    className="shopping-cart-product-amount-control"
                    onClick={incrementCart}
                    item={item.id}
                  >
                    +
                  </div>
                  <input
                    type={"number"}
                    className="shopping-cart-product-amount"
                    id={item.id}
                    value={Number(item.amount)}
                    onChange={handleCartAmount}
                  />
                  <div
                    className="shopping-cart-product-amount-control"
                    onClick={decrementCart}
                    item={item.id}
                  >
                    -
                  </div>
                </div>
                <div className="shopping-cart-product-price">
                  {(item.price * item.amount).toFixed(2)}$
                </div>
                <div className="shopping-cart-remove-product">Remove Item</div>
              </div>
            </div>
          ))}
        </div>
        <div className="shopping-cart-total-price-container">
          <div className="shopping-cart-total-price-header">Total Price:</div>
          <div className="shopping-cart-total-price-amount">
            {totalPrice.toFixed(2)}$
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
