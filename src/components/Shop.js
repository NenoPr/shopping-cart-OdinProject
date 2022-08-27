import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";
import "./styles/shop.css";
import imageGirl from "../images/Night Girl Night  City Night Sky Universe.jpg";
import AllProducts from "./ProductsData";

const Shop = (appProps) => {
  const [categoryRender, setCategoryRender] = useState({
    posters: true,
    figures: true,
    mousePads: true,
    clothes: true,
    stickers: true,
  });
  console.log("App Props for Shop", appProps);
  const [products, setProducts] = useState(appProps.items.products);
  console.log("Products", products);
  const { categories } = useParams();
  console.log("ProduseParamsuseParamsuseParamsuseParamsucts", categories);
  // const [cart, setCart] = useState(appProps.items.cart);

  useEffect(() => {
    console.log("Rerender");
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
  }, [categoryRender]);

  // Set the displayed categories
  const updateCategoryRender = (e) => {
    console.log("---------------------");
    console.log(
      "appPropsappPropsappPropsappPropsappPropsappPropsappProps",
      appProps.items.setLastLocation
    );
    // set every category to true if all items is selected
    let category = e.target.getAttribute("category");
    if (category === "allItems") {
      let newCategoryRender = categoryRender;
      newCategoryRender = Object.keys(newCategoryRender).reduce((result, k) => {
        return { ...result, [k]: true };
      }, {});

      setCategoryRender(newCategoryRender);
      // console.log("categoryRender", categoryRender);
      // gives selected class to target element
      document
        .querySelector(".sidebar-selected-category")
        .classList.remove("sidebar-selected-category");
      e.target.classList.add("sidebar-selected-category");
      return;
    }
    // set only the selected category to render
    let newCategoryRender = categoryRender;
    newCategoryRender = Object.keys(newCategoryRender) // Get list of keys in model
      .reduce((result, k) => {
        return { ...result, [k]: category === k };
      }, {});
    // console.log("newCategoryRender", newCategoryRender);
    setCategoryRender({ ...newCategoryRender });
    console.log("categoryRender", categoryRender);

    // gives selected class to target element
    document
      .querySelector(".sidebar-selected-category")
      .classList.remove("sidebar-selected-category");
    e.target.classList.add("sidebar-selected-category");
  };
  // console.log("Products Imported", products.items);
  // console.log("Cart Imported", products.cart);

  // Add items to cart
  function addToCart(e) {
    let newCartArticleName = e.target.getAttribute("name");
    let presentArticle = false;
    console.log("CART:", appProps.items.cart);
    // Check if the selected article is already present in the cart
    appProps.items.cart.map((obj) => {
      console.log("CARRRTTTTT", obj);
      // try {
      if (obj.productName === newCartArticleName) {
        presentArticle = true;
      }
      // } catch (error) {
      //   console.log("Error", error);
      // }
    });
    // If the article is present in cart update the object by 1 amount
    if (presentArticle) {
      let newState = appProps.items.cart.map((obj) => {
        console.log("obj.id", obj.id);
        try {
          if (obj.id === e.target.id) {
            let newAmount = obj.amount + 1;
            return { ...obj, amount: newAmount };
          } else return obj;
        } catch (error) {
          console.log("Error", error);
        }
      });
      appProps.items.setCart(newState);
      return;
      // if it is not present add it to the cart object
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

  // highlights selected category
  // function highlightLink(e) {
  //   document
  //     .querySelector("sidebar-selected-category")
  //     .classList.remove("sidebar-selected-category");
  //   e.target.classList.add("sidebar-selected-category");
  // }

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
          <img src={AllProducts.posters[1].productLocationUrl} alt="placeholder" />
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
          // render articles based on the selected categories in categoryRender
          categories
            ? products[categories].map((article) => (
                <div className="shop-article" key={uniqid()}>
                  <Link to={`/shop/${categories}/${article.productName}`}>
                    <img src={article.productLocationUrl} alt="placeholder" />
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
              
            : Object.keys(categoryRender).map((categories) =>
                categoryRender[categories]
                  ? products[categories].map((article) => (
                      <div className="shop-article" key={uniqid()}>
                        <Link to={`/shop/${categories}/${article.productName}`}>
                          <img src={article.productLocationUrl} alt="placeholder" />
                          <div className="product-name-holder">
                            {article.productName}
                          </div>
                        </Link>
                        <div className="product-type-holder">
                          {article.productType}
                        </div>
                        <div className="product-price">
                          {article.productPrice}$
                        </div>
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
              )
        }
      </div>
    </div>
  );
};

export default Shop;
