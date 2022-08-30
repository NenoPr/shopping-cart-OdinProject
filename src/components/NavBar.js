import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../shopping_cart.svg";
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
    if (cartDisplayStatus.classList.contains("toggle-cart-display")) {
      cartDisplayStatus.classList.remove("toggle-cart-display");
      document.body.style.overflow =
      "hidden";
    } else {
      cartDisplayStatus.classList.add("toggle-cart-display");
      document.body.style.overflow =
      "unset";
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
    console.log("product_idproduct_idproduct_id", product_id);
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
    console.log("newStatenewStatenewState", newState);
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
      <div>Logo</div>
      <Link to={"/"} className="nav-links">
        <div>Home</div>
      </Link>
      <Link to={"/shop"} className="nav-links">
        <div>Shop</div>
      </Link>
      <Link to={"/about"} className="nav-links">
        <div>About</div>
      </Link>
      <Link to={"/checkout"} className="nav-links">
        <div>Checkout</div>
      </Link>
      <div className="shopping-cart-article-holder">
        <span className="shopping-cart-article-counter">
          {appProps.props.cart.length >= 1 ? appProps.props.cart.length : ""}
        </span>
        <div className="nav-links cart-svg" onClick={displayCart}>
          <CartIcon />
        </div>
      </div>

      <div className="toggle-cart-display" id="cart">
        <div className="shopping-cart-container">
          <div className="shopping-cart-header-container">
            <div className="shopping-cart-headline">
              Cart{" "}
              <div className="shopping-cart-header-amount-items">
                {totalAmountInCart()}
              </div>
            </div>

            <span className="close-shopping-cart" onClick={displayCart}>
              Close
            </span>
          </div>
          <div className="shopping-cart-article-list">
            {appProps.props.cart.length >= 1 ? (
              appProps.props.cart.map((item) => (
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
                      {(item.price * item.amount).toFixed(2)}{" "}
                      <span className="shopping-cart-dollar-sign"> $</span>
                    </div>
                    <div
                      className="shopping-cart-remove-product"
                      product_id={item.id}
                      onClick={removeItemFromCart}
                    >
                      Remove Item
                    </div>
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
                className="nav-links"
              >
                <div className="shopping-cart-proceed-to-checkout">
                  Proceed to Checkout
                </div>
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
