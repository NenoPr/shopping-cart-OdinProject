import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import "./styles/shop.css";
import imageGirl from "../images/Night Girl Night  City Night Sky Universe.jpg";

const Shop = (appProps) => {
  const [categoryRender, setCategoryRender] = useState({
    posters: true,
    figures: true,
    mousePads: true,
    clothes: true,
    stickers: true,
  });
  console.log("App Props for Shop",appProps)
  const [products, setProducts] = useState(appProps.items.products)
  console.log("Products",products)
  // const [cart, setCart] = useState(appProps.items.cart);

  useEffect(() => {
    console.log("Rerender");
  }, [categoryRender]);

  const updateCategoryRender = (e) => {
    console.log("---------------------");
    let category = e.target.getAttribute("category");
    if (category === "allItems") {
      let newCategoryRender = categoryRender;
      newCategoryRender = Object.keys(newCategoryRender).reduce((result, k) => {
        return { ...result, [k]: true };
      }, {});

      setCategoryRender(newCategoryRender);
      // console.log("categoryRender", categoryRender);
      return;
    }
    let newCategoryRender = categoryRender;
    newCategoryRender = Object.keys(newCategoryRender) // Get list of keys in model
      .reduce((result, k) => {
        return { ...result, [k]: category === k };
      }, {});
    // console.log("newCategoryRender", newCategoryRender);
    setCategoryRender({ ...newCategoryRender });
    console.log("categoryRender", categoryRender);
  };
  // console.log("Products Imported", products.items);
  // console.log("Cart Imported", products.cart);

  function addToCart(e) {
    let newCartArticleName = e.target.getAttribute("name");
    let presentArticle = false;
    console.log("CART:", appProps.items.cart);
    appProps.items.cart.map((obj) => {
      console.log("CARRRTTTTT", obj);
      try {
        if (obj.productName === newCartArticleName) {
          presentArticle = true;
        }
      } catch (error) {
        console.log("Error", error);
      }
    });
    if (presentArticle) {
      let newState = appProps.items.cart.map((obj) => {
        console.log("obj.id", obj.id);
        try {
          if (obj.id === e.target.id) {
            let newAmount = obj.amount + 1;
            return { ...obj, amount: newAmount };
          } else return obj
        } catch (error) {
          console.log("Error", error);
        }
      });
      appProps.items.setCart(newState);
      return;
    } else {
      const newState = [...appProps.items.cart];
      newState.push({
        productName: e.target.getAttribute("name"),
        amount: 1,
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
        <div
          className="sidebar-option"
          onClick={updateCategoryRender}
          category={"allItems"}
        >
          All Items
        </div>
        <div
          className="sidebar-option"
          onClick={updateCategoryRender}
          category={"posters"}
        >
          Posters
        </div>
        <div
          className="sidebar-option"
          onClick={updateCategoryRender}
          category={"figures"}
        >
          Figures
        </div>
        <div
          className="sidebar-option"
          onClick={updateCategoryRender}
          category={"mousePads"}
        >
          Mouse Pads
        </div>
        <div
          className="sidebar-option"
          onClick={updateCategoryRender}
          category={"clothes"}
        >
          Clothes
        </div>
        <div
          className="sidebar-option"
          onClick={updateCategoryRender}
          category={"stickers"}
        >
          Stickers
        </div>
      </div>
      <div className="shop-articles">
        {Object.keys(categoryRender).map((categories) =>
          categoryRender[categories]
            ? products[categories].map((article) => (
                <div className="shop-article" key={uniqid()}>
                  <img src={imageGirl} alt="placeholder" />
                  <div className="product-name-holder">
                    {article.productName}
                  </div>
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
            : console.log(`Skipping ${categories}`)
        )}
      </div>
    </div>
  );
};

export default Shop;
