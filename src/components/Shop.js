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
        amount: 1,
        price: selectedProductObject.productPrice,
        location:
          process.env.PUBLIC_URL +
          "/" +
          selectedProductObject.productLocationUrl,
        id: e.target.id,
      });
      appProps.items.setCart(newState);
      console.log("Current Cart", appProps.items.cart);
    }
  }

  return (
    <div className="shop-content">
      <h2 className="shop-header">Shop Content</h2>
      <div className="shop-sidebar">
        <Link to={"/shop"} className="sidebar-option-Link">
          <div
            className="sidebar-option sidebar-selected-category"
            onClick={updateCategoryRender}
            category={"allItems"}
          >
            All Items
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
        <Link to={`/shop/clothes`} className="sidebar-option-Link">
          <div
            className="sidebar-option"
            onClick={updateCategoryRender}
            category={"clothes"}
          >
            Clothes
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
      <div className="shop-articles">
        {/* {
        <div className="shop-article" key={uniqid()}>
          <img className="shop-img" src={process.env.PUBLIC_URL + "/" + AllProducts.posters[1].productLocationUrl} alt="placeholder" />
          <div className="product-name-holder">
            {AllProducts.posters[0].productName}
          </div>
        <div className="product-type-holder">
          {AllProducts.posters[0].productType}
        </div>
        <div className="product-price">{AllProducts.posters[0].productPrice}$</div>
        <div
          className="add-to-cart"
          onClick={addToCart}
          id={AllProducts.posters[0].id}
          name={AllProducts.posters[0].productName}
        >
          Add to Cart
        </div>
      </div>} */}
        {
          // render articles based on the selected categories useParams value from the URL
          categories !== undefined
            ? AllProducts[categories].map((article) => (
                <div className="shop-article" key={uniqid()}>
                  <Link to={`/shop/${categories}/${article.productName}`} className="nav-links-articles">
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
                  <div className="product-price">{article.productPrice}$</div>
                  <div
                    className="add-to-cart"
                    onClick={addToCart}
                    id={article.id}
                    name={article.productName}
                  >
                    Add to Cart
                  </div>
                </div>
              ))
            : // Render all Items if categories is set to null
              Object.keys(AllProducts).map((categories) =>
                AllProducts[categories].map((article) => (
                  <div className="shop-article" key={uniqid()}>
                    <Link to={`/shop/${categories}/${article.productName}`} className="nav-links-articles">
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
                    <div className="product-price">{article.productPrice}$</div>
                    <div
                      className="add-to-cart"
                      onClick={addToCart}
                      id={article.id}
                      name={article.productName}
                    >
                      Add to Cart
                    </div>
                  </div>
                ))
              )
        }
      </div>
    </div>
  );
};

export default Shop;
