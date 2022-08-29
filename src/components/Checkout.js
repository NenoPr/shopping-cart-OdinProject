import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/checkout.css";

const Checkout = (appProps) => {
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("appProps for Checkout", appProps);

  // set totalAmount to all items times amount in cart
  useEffect(() => {
    let totalAmount = 0;
    appProps.props.cart.map((obj) => {
      totalAmount += obj.price * obj.amount;
    });
    setTotalPrice(totalAmount);
  }, [appProps.props.cart]);

  // Increment cart amount by 1
  function incrementCart(e) {
    let itemId = e.target.getAttribute("item");
    document.getElementById(itemId).value++;
    let newState = appProps.props.cart.map((obj) => {
      if (obj.id === itemId) {
        return { ...obj, amount: obj.amount + 1 };
      } else return obj;
    });
    appProps.props.setCart(newState);
  }

  // Decrement cart amount by 1
  function decrementCart(e) {
    let itemId = e.target.getAttribute("item");
    if (document.getElementById(itemId).value < 2) return;
    document.getElementById(itemId).value--;
    let newState = appProps.props.cart.map((obj) => {
      if (obj.id === itemId) {
        return { ...obj, amount: obj.amount - 1 };
      } else return obj;
    });
    appProps.props.setCart(newState);
  }

  // Add a specified amount to cart
  function handleCartAmount(e) {
    if (e.target.value < 1) e.target.value = 1;

    let newState = appProps.props.cart.map((obj) => {
      if (obj.id === e.target.id) {
        return { ...obj, amount: Number(e.target.value) };
      } else return obj;
    });
    appProps.props.setCart(newState);
  }

  // Remove Item from Cart
  function removeItemFromCart(e) {
    let product_id = e.target.getAttribute("product_id");
    var newState = appProps.props.cart
      .filter(function (obj) {
        if (obj.id === product_id) {
          return false;
        }
        return true;
      })
      .map(function (obj) {
        return obj;
      });
    appProps.props.setCart(newState);
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header-container">
        <div className="checkout-header">Checkout</div>
      </div>
      <div className="checkout-articles-container">
        <div className="checkout-article-list">
          {
            // Map through every article in cart
            appProps.props.cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <div className="checkout-image-container">
                  <img
                    className="checkout-img"
                    src={item.location}
                    alt={item.productName}
                  />
                </div>
                <div className="checkout-product-info">
                  <div className="checkout-product-name">
                    {item.productName}
                  </div>
                  <div className="checkout-product-amount-container">
                    <div
                      className="checkout-product-amount-control"
                      onClick={incrementCart}
                      item={item.id}
                    >
                      +
                    </div>
                    <input
                      type={"number"}
                      className="checkout-product-amount"
                      id={item.id}
                      value={Number(item.amount)}
                      onChange={handleCartAmount}
                    />
                    <div
                      className="checkout-product-amount-control"
                      onClick={decrementCart}
                      item={item.id}
                    >
                      -
                    </div>
                  </div>
                  <div className="checkout-product-price">
                    {(item.price * item.amount).toFixed(2)}$
                  </div>
                  <div
                    className="checkout-remove-product"
                    product_id={item.id}
                    onClick={removeItemFromCart}
                  >
                    Remove Item
                  </div>
                </div>
              </div>
            ))
          }
          <div className="checkout-total-price-container">
            <div className="checkout-total-price-header">Total Price:</div>
            <div className="checkout-total-price-amount">
              {totalPrice.toFixed(2)}$
            </div>
          </div>
        </div>
      </div>
      <Link to={"/purchase-completed"} className="checkout-link">
        <div className="checkout-complete-purchase">Complete Purchase</div>
      </Link>
    </div>
  );
};

export default Checkout;
