import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PayPalIcon } from "../paypal-logo.svg";
import "./styles/checkout.css";

const Checkout = (appProps) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(
    <div className="checkout-credit-cards-container">
      <div style={{ fontWeight: "700" }}>Credit Card Payment</div>
      <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>We accept</div>
      <div>
        <img
          className="credit-card-img"
          src="/shopping-cart-OdinProject/images/visa-logo.jpg"
          alt="visa logo"
        />
        <img
          className="credit-card-img"
          src="/shopping-cart-OdinProject/images/mastercard-logo.jpg"
          alt="mastercard logo"
        />
        <img
          className="credit-card-img"
          src="/shopping-cart-OdinProject/images/maestro-logo.jpg"
          alt="maestro logo"
        />
        <img
          className="credit-card-img"
          src="/shopping-cart-OdinProject/images/american-express-logo.jpg"
          alt="american express logo"
        />
      </div>
      <select name="payment-card" id="payment-car">
        <option value="visa">Visa</option>
        <option value="maestro-card">Maestro</option>
        <option value="master-card">Master Card</option>
        <option value="american-express">American Express</option>
      </select>
      <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
        Credit Card Number
      </div>
      <input className="checkout-input" type="text" maxLength={12} />
      <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
        Three Digit Code
      </div>
      <input
        style={{ width: "3rem" }}
        className="checkout-input"
        type="text"
        maxLength={3}
      />
      <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
        Expiration date
      </div>
      <div className="checkout-expiration-date">
        <span>
          M{" "}
          <input
            style={{ width: "2rem" }}
            className="checkout-input"
            type="text"
            maxLength={2}
          />
        </span>
        <span>
          Y{" "}
          <input
            style={{ width: "2rem" }}
            className="checkout-input"
            type="text"
            maxLength={2}
          />
        </span>
      </div>
    </div>
  );
  console.log("appProps for Checkout", appProps);

  // set totalAmount to all items times amount in cart
  useEffect(() => {
    let totalAmount = 0;
    appProps.props.cart.map((obj) => {
      totalAmount += obj.price * obj.amount;
    });
    setTotalPrice(totalAmount);
  }, [appProps.props.cart]);

  useEffect(() => {
    // Reset the scroll position to top
    window.scrollTo(0, 0);
  }, [])

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
    let product_size = e.target.getAttribute("size_checkout");
    let product_color = e.target.getAttribute("color_checkout");

    let newState = appProps.props.cart
      .filter(function (obj) {
        if (obj.id === product_id) {
          if (obj.size === product_size) {
            if (obj.color === product_color) {
              return false;
            }
          }
        }
        return true;
      })
      .map(function (obj) {
        return obj;
      });
    appProps.props.setCart(newState);
  }

  function handlePaymentMethod(e) {
    let payment = e.target.getAttribute("payment");
    if (payment === "Card") {
      const cardPayment = (
        <div className="checkout-credit-cards-container">
          <div style={{ fontWeight: "700" }}>Credit Card Payment</div>
          <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>We accept</div>
          <div>
            <img
              className="credit-card-img"
              src="/shopping-cart-OdinProject/images/visa-logo.jpg"
              alt="visa logo"
            />
            <img
              className="credit-card-img"
              src="/shopping-cart-OdinProject/images/mastercard-logo.jpg"
              alt="mastercard logo"
            />
            <img
              className="credit-card-img"
              src="/shopping-cart-OdinProject/images/maestro-logo.jpg"
              alt="maestro logo"
            />
            <img
              className="credit-card-img"
              src="/shopping-cart-OdinProject/images/american-express-logo.jpg"
              alt="american express logo"
            />
          </div>
          <select name="payment-card" id="payment-car">
            <option value="visa">Visa</option>
            <option value="maestro-card">Maestro</option>
            <option value="master-card">Master Card</option>
            <option value="american-express">American Express</option>
          </select>
          <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
            Credit Card Number
          </div>
          <input className="checkout-input" type="text" maxLength={12} />
          <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
            Three Digit Code
          </div>
          <input
            style={{ width: "3rem" }}
            className="checkout-input"
            type="text"
            maxLength={3}
          />
          <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>
            Expiration date
          </div>
          <div className="checkout-expiration-date">
            <span>
              M{" "}
              <input
                style={{ width: "2rem" }}
                className="checkout-input"
                type="text"
                maxLength={2}
              />
            </span>
            <span>
              Y{" "}
              <input
                style={{ width: "2rem" }}
                className="checkout-input"
                type="text"
                maxLength={2}
              />
            </span>
          </div>
        </div>
      );
      setPaymentMethod(cardPayment);
    } else if (payment === "PayPal") {
      const cardPayment = (
        <div className="paypal-logo">
          <PayPalIcon /> <span>Checkout</span>
        </div>
      );
      setPaymentMethod(cardPayment);
    } else if (payment === "Crypto") {
      const cardPayment = (
        <div className="crypto-payment">
          <img
            className="crypto-payment-img"
            src="/shopping-cart-OdinProject/images/bitcoin-logo.png"
            alt="bitcoin logo"
          />
          <img
            className="crypto-payment-img"
            src="/shopping-cart-OdinProject/images/ethereum-logo.png"
            alt="ethereum logo"
          />
          <img
            className="crypto-payment-img"
            src="/shopping-cart-OdinProject/images/flow-logo.png"
            alt="flow logo"
          />
        </div>
      );
      setPaymentMethod(cardPayment);
    }
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header-container">
        <div className="checkout-header">Checkout</div>
      </div>
      <div className="checkout-articles-container">
        <div className="checkout-article-list">
          {appProps.props.cart.length >= 1 ? (
            <div className="checkout-payment-method-container">
              <div style={{ fontWeight: "700" }}>Select payment Method</div>
              <div className="checkout-button-container">
                <button
                  className="checkout-button"
                  onClick={handlePaymentMethod}
                  payment={"Card"}
                >
                  Card
                </button>
                <button
                  className="checkout-button"
                  onClick={handlePaymentMethod}
                  payment={"PayPal"}
                >
                  PayPal
                </button>
                <button
                  className="checkout-button"
                  onClick={handlePaymentMethod}
                  payment={"Crypto"}
                >
                  Crypto
                </button>
              </div>
              <div style={{ fontWeight: "700" }}>
                {paymentMethod ? paymentMethod : "No Payment Method Selected"}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="checkout-articles">
            {
              // Map through every article in cart
              appProps.props.cart.map((item) => (
                <div
                  className="checkout-item"
                  key={item.id + item.size + item.color}
                >
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
                    {item.productType === "Clothes" ? (
                      <div className="checkout-product-details-selections">
                        <div className="checkout-product-details-selections-titles">
                          Color
                        </div>
                        <select
                          name="checkout-product-color"
                          className="checkout-product-color"
                          defaultValue={item.color}
                          disabled={true}
                        >
                          <option value="white">⚪ White</option>
                          <option value="black">⚫ Black</option>
                          <option value="blue">🔵 Blue</option>
                          <option value="green">🟢 Green</option>
                          <option value="red">🔴 Red</option>
                          <option value="yellow">🟡 Yellow</option>
                        </select>
                        <div className="checkout-product-details-selections-titles">
                          Size
                        </div>
                        <select
                          name="checkout-product-size"
                          className="checkout-product-size"
                          defaultValue={item.size}
                          disabled={true}
                        >
                          <option value="xs">XS</option>
                          <option value="s">S</option>
                          <option value="m">M</option>
                          <option value="l">L</option>
                          <option value="xl">XL</option>
                        </select>
                      </div>
                    ) : item.productType === "Poster" || item.productType === "Mouse Pad" ? (
                      <div className="checkout-product-details-selections">
                        <div className="checkout-product-details-selections-titles">
                          Size
                        </div>
                        <select
                          name="checkout-product-size"
                          className="checkout-product-size"
                          defaultValue={item.size}
                          disabled={true}
                        >
                          <option value="s">Small</option>
                          <option value="m">Medium</option>
                          <option value="l">Large</option>
                        </select>
                      </div>
                    ) : null}
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
                      {(item.price * item.amount).toFixed(2)}{" "}
                      <span className="checkout-dollar-sign">$</span>
                    </div>
                    <div
                      className="checkout-remove-product"
                      product_id={item.id}
                      size_checkout={item.size}
                      color_checkout={item.color}
                      onClick={removeItemFromCart}
                    >
                      Remove Item
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {appProps.props.cart.length >= 1 ? (
          <div className="checkout-lower-container">
            <div className="checkout-shipping-fee">
              <div
                style={{ fontSize: "1.2rem" }}
                className="checkout-shipping-fee-title"
              >
                Shipping Fee:
              </div>
              <div className="checkout-shipping-fee-amount">
                {(totalPrice / (appProps.props.cart.length + 10)).toFixed(2)}{" "}
                <span className="checkout-dollar-sign">$</span>
              </div>
            </div>
            <div className="checkout-total-price-container">
              <div className="checkout-total-price-header">Total Price:</div>
              <div className="checkout-total-price-amount">
                {(
                  totalPrice +
                  totalPrice / (appProps.props.cart.length + 10)
                ).toFixed(2)}{" "}
                <span className="checkout-dollar-sign">$</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="checkout-no-items">No Items added to cart.</div>
        )}
      </div>
      {appProps.props.cart.length >= 1 ? (
        <Link to={"/purchase-completed"} className="checkout-link">
          <div className="checkout-complete-purchase">Complete Purchase</div>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Checkout;
