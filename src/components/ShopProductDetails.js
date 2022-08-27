import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import uniqid from "uniqid";
import { useParams } from "react-router-dom";
import AllProducts from "./ProductsData";
import "./styles/shop.css";
import "./styles/shop-product-details.css";

const ShopProductDetails = ( appProps ) => {
  let { product } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [originLocation, setOriginLocation] = useState("");

  useEffect(() => {
    Object.keys(AllProducts).map((key) => {
        AllProducts[key].map((article) => {
        if (article.productName === product) {
          console.log("article", article);
          const arr = article;
          setCurrentProduct(arr);
        }
      });
    });
    // console.log("currentProduct", currentProduct);
    // console.log("productproductproduct",product)
    // console.log("appPropsappPropsappPropsappPropsappProps",appProps.props)
    if (appProps.props === "allItems") {
        setOriginLocation("/shop")
    } else {
        setOriginLocation(`/shop/${appProps.props}`)
    }
    let pathLocation = `${appProps.props}/${product}`
    // console.log("pathLocationpathLocationpathLocationpathLocationpathLocation",pathLocation)
    // // pathLocation = pathLocation.replace(product.replace(" ","%20"),"").slice(0,-1)
    // console.log("productproductproduct",pathLocation)
  }, [appProps,product]);

  console.log("ShopProductDetails Props from APP", AllProducts);
  console.log("currentProductcurrentProductcurrentProduct", currentProduct);
  console.log("propspropspropspropspropsprops",appProps.props)
  return (
    <div className="shop-content">
        <Link to={originLocation}>
      <div className="product-details-back-link">Go Back</div>
      </Link>
      <h2 className="shop-header">Hello from Product Details</h2>
      {Object.keys(currentProduct).map((item) => (
        <div key={uniqid()}>{currentProduct[item]}</div>
      ))}
    </div>
  );
};

export default ShopProductDetails;
