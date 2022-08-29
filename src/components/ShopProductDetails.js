import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AllProducts from "./ProductsData";
import "./styles/shop.css";
import "./styles/shop-product-details.css";

const ShopProductDetails = (appProps) => {
  const { product } = useParams();
  const { categories } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [originLocation, setOriginLocation] = useState("");
  const [orderAmount, setOrderAmount] = useState(1);
  console.log("ShopProductDetails appProps fromApp", appProps);

  useEffect(() => {
    // Find selected product from categories useParams and product useParams for name to find specific product
    AllProducts[categories].map((article) => {
      if (article.productName === product) {
        console.log("article", article);
        const obj = article;
        setCurrentProduct(obj);
      }
    });

    // Set origin Location so clicking back button leads to previous /shop/:category instead of /shop
    if (appProps.props.lastLocation === "allItems") {
      setOriginLocation("/shop");
    } else {
      setOriginLocation(`/shop/${appProps.props.lastLocation}`);
    }
  }, [appProps.props.lastLocation, product, categories]);

  useEffect(() => {
    console.log("Rerendered");
  }, [orderAmount]);

  function handleAddToCart() {
    let presentArticle = false;
    // Check if the article is present in the cart
    appProps.props.cart.map((obj) => {
      if (obj.id === currentProduct.id) {
        presentArticle = true;
      }
    });
    // If the article is present in cart update the object by newAmount
    if (presentArticle) {
      let newState = appProps.props.cart.map((obj) => {
        if (obj.id === currentProduct.id) {
          return { ...obj, amount: Number(orderAmount) + Number(obj.amount) };
        } else return obj;
      });
      appProps.props.setCart(newState);
      console.log("Current Cart", appProps.props.cart);
      return;
      // if it is not present add it to the cart object
    } else {
      const newState = [...appProps.props.cart];
      newState.push({
        productName: currentProduct.productName,
        amount: orderAmount,
        price: currentProduct.productPrice,
        location:
          process.env.PUBLIC_URL + "/" + currentProduct.productLocationUrl,
        id: currentProduct.id,
      });
      appProps.props.setCart(newState);
      console.log("Current Cart", appProps.props.cart);
    }
  }

  // Increase order amount by 1
  function incrementCart() {
    setOrderAmount(orderAmount + 1);
  }

  // Decrease order amount by 1 if amount is not lower than 2
  function decrementCart() {
    if (orderAmount < 2) {
      return;
    }
    setOrderAmount(orderAmount - 1);
  }

  // Set order amount by specified amount
  function handleOrderAmountCart(e) {
    if (e.target.value < 1) setOrderAmount(1);
    else setOrderAmount(e.target.value);
  }

  return (
    <div className="shop-content">
      <Link to={originLocation} className="product-details-back-link">
        <div>Go Back</div>
      </Link>
      <h2 className="shop-header">{currentProduct.productName}</h2>
      <div className="product-details-container">
        <div className="product-info">
          <div className="product-image-container">
            <img
              className="product-image"
              src={
                process.env.PUBLIC_URL + "/" + currentProduct.productLocationUrl
              }
              alt={currentProduct.productName}
            />
          </div>
          <div className="product-details">
            <div className="product-name">{currentProduct.productName}</div>
            <div className="product-category">{currentProduct.productType}</div>
            <div className="product-price">{currentProduct.productPrice}$</div>
            <div className="product-amount-to-order-container">
              <div
                className="product-amount-control"
                item={currentProduct.id}
                onClick={incrementCart}
              >
                +
              </div>
              <input
                type={"number"}
                id={currentProduct.id}
                className="product-amount"
                onChange={handleOrderAmountCart}
                value={orderAmount}
              ></input>
              <div
                className="product-amount-control"
                item={currentProduct.id}
                onClick={decrementCart}
              >
                -
              </div>
            </div>
            <div className="product-cart-container">
              <div className="product-add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </div>
              <div className="product-proceed-to-checkout">Buy Now</div>
            </div>
            <div className="product-summary-container">
              <div className="product-summary-title">Summary</div>
              <div className="product-summary-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                sit dolorem porro quae dicta aperiam quos obcaecati, vel ab! Non
                possimus architecto adipisci similique odit quae praesentium
                illum, quaerat unde?
              </div>
            </div>
          </div>
        </div>
        <div className="product-reviews-container"></div>
        <div className="product-reviews-header">
          <div className="product-reviews-list"></div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductDetails;
