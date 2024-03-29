import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../shopping_cart.svg";
import { ReactComponent as GenshinLogo } from "../Genshin_Impact_logo.svg";
import "./styles/nav-bar.css";

function NavBar(appProps) {
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("appProps for NavBar", appProps);

  useEffect(() => {
    let totalAmount = 0;
    if (appProps.props.cart.length >= 1) {
      appProps.props.cart.map((obj) => {
        totalAmount += obj.price * obj.amount;
      });
      setTotalPrice(totalAmount);
    }
  }, [appProps.props.cart]);

  function displayCart() {
    let cartDisplayStatus = document.getElementById("cart");
    if (cartDisplayStatus.classList.contains("toggle-cart-display-off")) {
      cartDisplayStatus.classList.remove("toggle-cart-display-off");
      document.querySelector(".shopping-cart-container").classList.remove("shopping-cart-container-close-animation")
      cartDisplayStatus.classList.add("toggle-cart-display-on");
      document.body.style.overflow = "hidden";
    } else {
      cartDisplayStatus.classList.add("toggle-cart-display-off");
      document.querySelector(".shopping-cart-container").classList.add("shopping-cart-container-close-animation")
      setTimeout(() => {
        cartDisplayStatus.classList.remove("toggle-cart-display-on");
      }, 400);
      document.body.style.overflow = "auto";
      
    }
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

  function removeItemFromCart(e) {
    let product_id = e.target.getAttribute("product_id");
    let product_size = e.target.getAttribute("size_value");
    let product_color = e.target.getAttribute("color_value");

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
    console.log("New Cart state to set:", newState);
    appProps.props.setCart(newState);
  }

  function totalAmountInCart() {
    let amountInCart = 0;
    appProps.props.cart.map((item) => {
      amountInCart += item.amount;
    });
    return `${appProps.props.cart.length} Products, ${amountInCart} Items`;
  }

  return (
    <div className="nav-content">
      <Link to={"/"} className="nav-links nav-bar-logo-link">
        <GenshinLogo className="nav-bar-logo" />
        <span className="nav-bar-logo-text">FAN SHOP!</span>
      </Link>
      <Link to={"/"} className="nav-links">
        <div>HOME</div>
      </Link>
      <Link to={"/shop"} className="nav-links">
        <div>SHOP</div>
      </Link>
      <Link to={"/about"} className="nav-links">
        <div>ABOUT</div>
      </Link>
      <Link to={"/checkout"} className="nav-links">
        <div>CHECKOUT</div>
      </Link>
      <div className="nav-bar-cart-Link">
        <span className="shopping-cart-article-counter-holder">
          <span className="shopping-cart-article-counter">
            {appProps.props.cart.length >= 1 ? appProps.props.cart.length : ""}
          </span>
        </span>
        <div className="nav-links cart-svg" onClick={displayCart}>
          <CartIcon />
        </div>
      </div>

      <div className="toggle-cart-display-off" id="cart">
        <div className="shopping-cart-close-cover" onClick={displayCart}></div>
        <div className="shopping-cart-container">
          <div className="shopping-cart-header-container">
            <div className="shopping-cart-headline">
              Cart{" "}
              <div className="shopping-cart-header-amount-items">
                {totalAmountInCart()}
              </div>
            </div>

            <button className="close-shopping-cart" onClick={displayCart}>
              CLOSE
            </button>
          </div>
          <div className="shopping-cart-article-list">
            {appProps.props.cart.length >= 1 ? (
              appProps.props.cart.map((item) => (
                <div
                  className="shopping-cart-item"
                  key={item.id + item.size + item.color}
                >
                  <div className="shopping-cart-image-container">
                    {item.productInfo ? (
                      item.productInfo.map((info) =>
                        item.color === info.color ? (
                          <img
                            className="shopping-cart-img"
                            src={"/shopping-cart-OdinProject/" + info.image}
                            alt={item.productName + info.color}
                            key={info.image + info.color}
                          />
                        ) : null
                      )
                    ) : (
                      <img
                        className="shopping-cart-img"
                        src={item.location}
                        alt={item.productName}
                        key={item.image + item.productName}
                      />
                    )}
                  </div>
                  <div className="shopping-cart-product-info-container">
                    <div className="shopping-cart-product-info">
                      <div className="shopping-cart-product-name">
                        {item.productName}
                      </div>
                    </div>
                    {item.productType === "Clothes" ? (
                      <div className="nav-bar-product-details-selections">
                        <div className="nav-bar-product-details-selections-titles">
                          Color
                        </div>
                        <select
                          name="nav-bar-product-color"
                          className="nav-bar-product-color"
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
                        <div className="nav-bar-product-details-selections-titles">
                          Size
                        </div>
                        <select
                          name="nav-bar-product-size"
                          className="nav-bar-product-size"
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
                    ) : item.productType === "Poster" ||
                      item.productType === "Mouse Pad" ? (
                      <div className="nav-bar-product-details-selections">
                        <div className="nav-bar-product-details-selections-titles">
                          Size
                        </div>
                        <select
                          name="nav-bar-product-size"
                          className="nav-bar-product-size"
                          defaultValue={item.size}
                          disabled={true}
                        >
                          <option value="s">Small</option>
                          <option value="m">Medium</option>
                          <option value="l">Large</option>
                        </select>
                      </div>
                    ) : null}
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
                      {(item.price * item.amount).toFixed(2)}{" "}
                      <span className="shopping-cart-dollar-sign"> $</span>
                    </div>
                    <button
                      className="shopping-cart-remove-product"
                      product_id={item.id}
                      size_value={item.size}
                      color_value={item.color}
                      onClick={removeItemFromCart}
                    >
                      REMOVE ITEM
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="shopping-cart-empty-cart">No Items</div>
            )}
          </div>
          {appProps.props.cart.length >= 1 ? (
            <div className="shopping-cart-lower-container">
              <div className="shopping-cart-total-price-container">
                <div className="shopping-cart-total-price-header">
                  Total Price:
                </div>
                <div className="shopping-cart-total-price-amount">
                  {totalPrice.toFixed(2)}{" "}
                  <span className="shopping-cart-dollar-sign">$</span>
                </div>
              </div>
              <Link
                to={"/checkout"}
                onClick={displayCart}
                className="proceed-to-checkout-nav-link"
              >
                <button className="shopping-cart-proceed-to-checkout">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
