import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";
import "./styles/shop.css";
import AllProducts from "./ProductsData";

const Shop = (appProps) => {
  console.log("App Props for Shop", appProps);
  const { categories } = useParams();
  console.log("Currently Browsing Category", categories);

  useEffect(() => {
    console.log("Shop Module Rerender");
    // sets css class on selected category
    document
      .querySelector(".sidebar-selected-category")
      .classList.remove("sidebar-selected-category");
    if (categories) {
      document
        .querySelector(`[category="${categories}"]`)
        .classList.add("sidebar-selected-category");
      appProps.items.setLastLocation(categories);
    } else {
      document
        .querySelector(`[category="allItems"]`)
        .classList.add("sidebar-selected-category");
      appProps.items.setLastLocation("allItems");
    }
    // Reset the scroll position to top
    window.scrollTo(0, 0);
  }, [categories, appProps.items.lastLocation]);

  // Gives class to element on the DOM to show current category selection
  const updateCategoryRender = (e) => {
    // gives selected class to target element
    document
      .querySelector(".sidebar-selected-category")
      .classList.remove("sidebar-selected-category");
    e.target.classList.add("sidebar-selected-category");
  };

  // Add items to cart
  function addToCart(e) {
    let newCartArticleName = e.target.getAttribute("name");
    let presentArticle = false;
    // Check if the selected article is already present in the cart
    appProps.items.cart.map((obj) => {
      if (obj.productName === newCartArticleName) {
        presentArticle = true;
      }
    });
    // If the article is present in cart update the object by 1 amount
    if (presentArticle) {
      let newState = appProps.items.cart.map((obj) => {
        if (obj.id === e.target.id) {
          let newAmount = obj.amount + 1;
          return { ...obj, amount: newAmount };
        } else return obj;
      });
      appProps.items.setCart(newState);
      console.log("Current Cart", appProps.items.cart);
      document
          .getElementById("confirm-add-to-cart-popup")
          .classList.add("add-to-cart-popup-on");
          document
          .getElementById("confirm-add-to-cart-popup")
          .classList.remove("add-to-cart-popup-off");
      setTimeout(() => {
        document
          .getElementById("confirm-add-to-cart-popup")
          .classList.remove("add-to-cart-popup-on");
        document
          .getElementById("confirm-add-to-cart-popup")
          .classList.add("add-to-cart-popup-off");
      }, 3000);
      return;
      // if it is not present add it to the cart object
    } else {
      let selectedProductObject = {};
      const newState = [...appProps.items.cart];
      Object.keys(AllProducts).map((categories) => {
        AllProducts[categories].map((obj) => {
          if (obj.id === e.target.id) {
            selectedProductObject = obj;
          }
        });
      });
      newState.push({
        productName: e.target.getAttribute("name"),
        productType: selectedProductObject.productType,
        amount: 1,
        price: selectedProductObject.productPrice,
        location:
          process.env.PUBLIC_URL +
          "/" +
          selectedProductObject.productLocationUrl,
        productInfo: selectedProductObject.productColors,
        id: e.target.id,
        color: "white",
        size: "m",
      });
      appProps.items.setCart(newState);
      console.log("Current Cart", appProps.items.cart);
      document
        .getElementById("confirm-add-to-cart-popup")
        .classList.add("add-to-cart-popup-on");
        document
        .getElementById("confirm-add-to-cart-popup")
        .classList.remove("add-to-cart-popup-off");
      setTimeout(() => {
        document
          .getElementById("confirm-add-to-cart-popup")
          .classList.remove("add-to-cart-popup-on");
        document
          .getElementById("confirm-add-to-cart-popup")
          .classList.add("add-to-cart-popup-off");
      }, 3000);
    }
  }

  return (
    <div className="shop-content">
      <div className="shop-current-location-navigation-links">
        <Link to={"/"} className="shop-nav-Link">
          Home
        </Link>
        <span>{"->"}</span>
        <Link to={`/shop`} className="shop-nav-Link">
          Shop
        </Link>
        {categories === undefined ? null : (
          <span>
            <span>{"->"}</span>
            <span>{categories[0].toUpperCase() + categories.slice(1)}</span>
          </span>
        )}
      </div>
      <div className="shop-header-title-container">
        <h2 className="shop-header-title">SHOP</h2>
        <div className="shop-header-category">
          {categories === undefined
            ? "All Items"
            : categories[0].toUpperCase() + categories.slice(1)}
        </div>
      </div>
      <div className="shop-sidebar-container">
        <Link to={"/shop"} className="sidebar-option-Link">
          <div
            className="sidebar-option sidebar-selected-category"
            onClick={updateCategoryRender}
            category={"allItems"}
          >
            All Items
          </div>
        </Link>
        <Link to={`/shop/clothes`} className="sidebar-option-Link">
          <div
            className="sidebar-option"
            onClick={updateCategoryRender}
            category={"clothes"}
          >
            Clothes
          </div>
        </Link>

        <Link to={"/shop/figures"} className="sidebar-option-Link">
          <div
            className="sidebar-option"
            onClick={updateCategoryRender}
            category={"figures"}
          >
            Figures
          </div>
        </Link>
        <Link to={"/shop/mousePads"} className="sidebar-option-Link">
          <div
            className="sidebar-option"
            onClick={updateCategoryRender}
            category={"mousePads"}
          >
            Mouse Pads
          </div>
        </Link>
        <Link to={"/shop/posters"} className="sidebar-option-Link">
          <div
            className="sidebar-option"
            onClick={updateCategoryRender}
            category={"posters"}
          >
            Posters
          </div>
        </Link>

        <Link to={`/shop/stickers`} className="sidebar-option-Link">
          <div
            className="sidebar-option"
            onClick={updateCategoryRender}
            category={"stickers"}
          >
            Stickers
          </div>
        </Link>
      </div>
      <div className="shop-articles-container">
        {
          // render articles based on the selected categories useParams value from the URL
          categories !== undefined
            ? AllProducts[categories].map((article) => (
                <div className="shop-article" key={uniqid()}>
                  <Link
                    to={`/shop/${categories}/${article.productName}`}
                    className="nav-links-articles"
                  >
                    <img
                      className="shop-img"
                      src={
                        process.env.PUBLIC_URL +
                        "/" +
                        article.productLocationUrl
                      }
                      alt="placeholder"
                    />
                    <div className="product-name-holder">
                      {article.productName}
                    </div>
                  </Link>
                  <div className="product-type-holder">
                    {article.productType}
                  </div>
                  <div className="product-price">
                    {article.productPrice}{" "}
                    <span className="shop-product-price-dollar">$</span>
                  </div>
                  <button
                    className="add-to-cart"
                    onClick={addToCart}
                    id={article.id}
                    name={article.productName}
                  >
                    ADD TO CART
                  </button>
                  <Link to={"/checkout"}>
                    <button
                      className="shop-buy-now"
                      onClick={addToCart}
                      id={article.id}
                      name={article.productName}
                    >
                      BUY NOW
                    </button>
                  </Link>
                </div>
              ))
            : // Render all Items if categories is set to null
              Object.keys(AllProducts).map((categories) =>
                AllProducts[categories].map((article) => (
                  <div className="shop-article" key={uniqid()}>
                    <Link
                      to={`/shop/${categories}/${article.productName}`}
                      className="nav-links-articles"
                    >
                      <img
                        className="shop-img"
                        src={
                          process.env.PUBLIC_URL +
                          "/" +
                          article.productLocationUrl
                        }
                        alt="placeholder"
                      />
                      <div className="product-name-holder">
                        {article.productName}
                      </div>
                    </Link>
                    <div className="product-type-holder">
                      {article.productType}
                    </div>
                    <div className="product-price">
                      {article.productPrice}{" "}
                      <span className="shop-product-price-dollar">$</span>
                    </div>
                    <button
                      className="add-to-cart"
                      onClick={addToCart}
                      id={article.id}
                      name={article.productName}
                    >
                      ADD TO CART
                    </button>
                    <Link to={"/checkout"}>
                      <button
                        className="shop-buy-now"
                        onClick={addToCart}
                        id={article.id}
                        name={article.productName}
                      >
                        BUY NOW
                      </button>
                    </Link>
                  </div>
                ))
              )
        }
      </div>
    </div>
  );
};

export default Shop;
