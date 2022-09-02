import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import AllProducts from "./ProductsData";
import uniqid from "uniqid";
import "./styles/shop.css";
import "./styles/shop-product-details.css";

const ShopProductDetails = (appProps) => {
  const { product } = useParams();
  const { categories } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductReviews, setCurrentProductReviews] = useState([]);
  const [originLocation, setOriginLocation] = useState("");
  const [orderAmount, setOrderAmount] = useState(1);
  const navigate = useNavigate();
  console.log("ShopProductDetails appProps fromApp", appProps);
  console.log("currentProduct Reviews:", currentProduct.reviews);

  useEffect(() => {
    // Find selected product from categories useParams and product useParams for name to find specific product
    AllProducts[categories].map((article) => {
      if (article.productName === product) {
        console.log("article", article);
        const obj = article;
        setCurrentProduct(obj);
        setCurrentProductReviews(obj.reviews);
      }
    });

    // Set origin Location so clicking back button leads to previous /shop/:category instead of /shop
    if (appProps.props.lastLocation === "allItems") {
      setOriginLocation("/shop");
    } else {
      setOriginLocation(`/shop/${appProps.props.lastLocation}`);
    }
    // Reset the scroll position to top
    window.scrollTo(0, 0);
    console.log("Product Details Main - Rerender");
  }, [appProps.props.lastLocation, product, categories]);

  useEffect(() => {
    console.log("Rerendered");
  }, [orderAmount]);

  function handleAddToCart() {
    let presentArticle = false;
    // Check if the article is present in the cart
    let newColor = "";
    let newSize = "";
    // Variable to check if the item of the same color already exist
    try {
      newColor = document.getElementById("product-color-id").value;
    } catch (error) {
      console.log("Undefined Color Element");
    }
    // Variable to check if the item of the same size already exist
    try {
      newSize = document.getElementById("product-size-id").value;
    } catch (error) {
      console.log("Undefined Size Element");
    }
    appProps.props.cart.map((obj) => {
      if (obj.id === currentProduct.id) {
        if (obj.productType === "Poster") {
          console.log("Poster");
          if (obj.size === newSize) {
            console.log("Same Size");
            presentArticle = true;
          }
        } else {
          if (obj.size === newSize) {
            if (obj.color === newColor) {
              presentArticle = true;
            }
          }
        }
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
      // Copy the current cart to newState
      const newState = [...appProps.props.cart];
      let newColor = "";
      let newSize = "";
      // try to get color and size if present in DOM
      try {
        newColor = document.getElementById("product-color-id").value;
      } catch (error) {
        console.log("Undefined Color Element");
      }
      try {
        newSize = document.getElementById("product-size-id").value;
      } catch (error) {
        console.log("Undefined Size Element");
      }
      // Push the new item to newState
      newState.push({
        productName: currentProduct.productName,
        productType: currentProduct.productType,
        amount: orderAmount,
        price: currentProduct.productPrice,
        location:
          process.env.PUBLIC_URL + "/" + currentProduct.productLocationUrl,
        productInfo: currentProduct.productColors,
        id: currentProduct.id,
        color: newColor,
        size: newSize,
      });
      // Push newState to cart
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

  // Create a review for the product
  function createReview(e) {
    let emoji = "";
    for (
      let i = 0;
      i < Number(document.getElementById("stars").value[0]);
      i++
    ) {
      emoji += "⭐";
    }
    let newReview = {
      name: document.getElementById("name").value,
      stars: emoji,
      text: document.getElementById("reviewText").value,
    };
    // If there are reviews copy the array and add a new object to it
    // If there are no reviews set the newReview as a new state
    if (currentProductReviews) {
      setCurrentProductReviews([...currentProductReviews, newReview]);
    } else {
      setCurrentProductReviews([newReview]);
    }
    AllProducts[categories].map((article) => {
      if (article.id === currentProduct.id) {
        article.reviews.push(newReview)
      }
    });
    document.querySelectorAll("input").forEach((item) => {
      item.value = "";
    });
    document.querySelectorAll("select").forEach((item) => {
      item.value = "5-star";
    });
    document.querySelectorAll("textarea").forEach((item) => {
      item.value = "";
    });
    console.log("currentProductcurrentProduct", currentProduct);
  }

  function changeCurrentImage(e) {
    document.querySelector(".product-image").src = e.target.src
  }

  useEffect(() => {
    console.log("Product Details 'currentProductReviews' update - Rerender");
  }, [currentProductReviews]);

  return (
    <div className="shop-product-details-container">
      <div className="shop-product-details-header-container">
        <div className="current-location-navigation-links">
          <Link to={"/"} className="shop-product-details-nav-Link">
            Home
          </Link>
          <span>{"->"}</span>
          <Link to={`/shop`} className="shop-product-details-nav-Link">
            Shop
          </Link>
          <span>{"->"}</span>
          <Link
            to={`/shop/${categories}`}
            className="shop-product-details-nav-Link"
          >
            {categories[0].toUpperCase() + categories.slice(1)}
          </Link>
          <span>{"->"}</span>
          <span>{currentProduct.productName}</span>
        </div>
        <div className="product-details-back-link-container">
            <div className="product-details-back-link" onClick={() => navigate(-1)}>{"◀ Back"}</div>
        </div>
      </div>
      <div className="product-details-container">
        <div className="product-info">
          <div className="product-image-container">
            <img
              className="product-image"
              src={
                process.env.PUBLIC_URL + "/" + currentProduct.productLocationUrl
              }
              alt={currentProduct.productName}
              key={currentProduct.productLocationUrl}
            />
            <div className="product-images-selection-container">
            {currentProduct.productImages ?
            currentProduct.productImages.map(item => (
              <div className="images-selection-holder" key={item} onClick={(e) => document.querySelector(".product-image").src = e.target.src}>
                <img className="images-selection-image"
                  src={
                    "/shopping-cart-OdinProject/" +
                    item
                  }
                  alt=""
                />
              </div>
            )) : null}
            </div>
          </div>
          <div className="product-details">
            <div className="product-details-info-container">
              <div className="product-details-info">
                <div className="product-name" key={currentProduct.productName}>
                  {currentProduct.productName}
                </div>
                <div
                  className="product-category"
                  key={currentProduct.productType}
                >
                  {currentProduct.productType}
                </div>
                <div
                  className="product-price"
                  key={currentProduct.productPrice}
                >
                  {currentProduct.productPrice}
                  <span className="product-price-dollar">{" $"}</span>
                </div>
                <div className="product-amount-to-order-container">
                  <div
                    className="product-amount-control"
                    item={currentProduct.id}
                    onClick={incrementCart}
                    key={currentProduct.id + "1"}
                  >
                    +
                  </div>
                  <input
                    type={"number"}
                    id={currentProduct.id}
                    className="product-amount"
                    onChange={handleOrderAmountCart}
                    value={orderAmount}
                    key="currentProduct.id"
                  />
                  <div
                    className="product-amount-control"
                    item={currentProduct.id}
                    onClick={decrementCart}
                    key={currentProduct.id + "3"}
                  >
                    -
                  </div>
                </div>
              </div>
              {currentProduct.productType === "Clothes" ? (
                <div className="product-details-selections">
                  <div
                    className="product-details-selections-titles"
                    defaultValue={"white"}
                  >
                    Color
                  </div>
                  <select name="product-color" id="product-color-id">
                  {currentProduct.productColors.map(item => (
                    <option key={item.color+item.icon+item.image} value={item.color}> {item.icon + (item.color[0].toUpperCase() + item.color.slice(1))}</option>
                  ))}
                  </select>
                  <div className="product-details-selections-titles">Size</div>
                  <select
                    name="product-size"
                    id="product-size-id"
                    defaultValue={"m"}
                  >
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
              ) : currentProduct.productType === "Poster" ||
                currentProduct.productType === "Mouse Pad" ? (
                <div className="product-details-selections">
                  <div className="product-details-selections-titles">Size</div>
                  <select
                    name="product-size"
                    id="product-size-id"
                    className="size-selection-option"
                    defaultValue={"m"}
                  >
                    <option value="s">Small - 50cm / 30cm</option>
                    <option value="m">Medium - 100cm / 60cm</option>
                    <option value="l">Large - 180cm / 100cm </option>
                  </select>
                </div>
              ) : null}
            </div>
            <div className="product-cart-container">
              <div className="product-add-to-cart" onClick={handleAddToCart}>
                ADD TO CART
              </div>
              <Link to={"/checkout"} className="product-proceed-to-checkout">
                <div onClick={handleAddToCart}>BUY NOW</div>
              </Link>
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
        <div className="product-reviews-container">
          <div className="product-reviews-header-title">Reviews</div>
          <div className="product-reviews-list">
            {currentProductReviews ? (
              currentProductReviews.map((review) => (
                <div className="product-review-item" key={uniqid()}>
                  <div>{review.name}</div>
                  <span>{review.stars}</span>
                  <div>{review.text}</div>
                </div>
              ))
            ) : (
              <div>No Reviews yet! Be the First!</div>
            )}
          </div>
          <div className="product-create-review-container" id="create-review">
            <div>Post Review</div>
            <div className="product-create-review">
              <span className="product-create-info">Receipt ID: </span>
              <input type="number" id="receiptId" />
              <span className="product-create-info">Name: </span>
              <input type="text" id="name" />
              <span className="product-create-info">Rating: </span>
              <select id="stars" defaultValue={"5-star"}>
                <option value="1-star">⭐</option>
                <option value="2-star">⭐⭐</option>
                <option value="3-star">⭐⭐⭐</option>
                <option value="4-star">⭐⭐⭐⭐</option>
                <option value="5-star">⭐⭐⭐⭐⭐</option>
              </select>
            </div>
            <span>Write Your Review</span>
            <textarea
              id="reviewText"
              cols="30"
              rows="7"
              className="product-create-review-textarea"
              placeholder="Write your review here..."
            ></textarea>

            <button
              className="product-create-review-submit-button"
              onClick={createReview}
            >
              POST REVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductDetails;
