import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { ReactComponent as GenshinLogo } from "../Genshin_Impact_logo.svg";
import AllProducts from "./ProductsData";
import "./styles/home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header-container">
        <div className="home-header-name">
          <GenshinLogo className="home-genshin-logo" />
          <h2 className="home-genshin-logo-text">FAN SHOP!</h2>
        </div>
        <div className="home-header-info-container">
          <h2 className="home-header-info-title">
            THE BEST GENSHIN IMPACT MERCH YOUR MONEY CAN BUY. SIMPLE AS.
          </h2>
          <div className="home-header-info-text">
            <div className="home-para-header-text">
              Browse our Clothes, Figures, Mousepads and more!
            </div>
            <div className="home-para-header-text">Get your goodies now!</div>
          </div>
          <Link to={"/shop"} className="home-header-info-Link">
            <button className="home-header-info-button">SHOP NOW</button>
          </Link>
        </div>
      </div>
      <div className="home-featured-goods">
        <h2>Featured Goods</h2>
        <div className="home-para-featured-goods-text">
          These goodies are{" "}
          <span
            style={{ color: "red", fontWeight: "700", fontSize: "1.75rem" }}
          >
            HOT
          </span>{" "}
          now! Get them while we still have them!
        </div>
        <div className="home-featured-goods-container">
          {AllProducts["clothes"].map((item) =>
            item.productName === "Hu Taos Little Helper" ? (
              <Link
                to={`/shop/clothes/${item.productName}`}
                className="home-featured-goods-Links"
                key={uniqid()}
              >
                <div className="home-featured-goods-item">
                  <div className="home-featured-goods-item-category">
                    {item.productType}
                  </div>
                  <img
                    src={
                      "/shopping-cart-OdinProject/" + item.productLocationUrl
                    }
                    alt=""
                    className="home-featured-goods-item-image"
                  />
                  <div className="home-featured-goods-item-name">
                    {item.productName}
                  </div>
                  <div className="home-featured-goods-item-price">
                    {item.productPrice}
                    <span>$</span>
                  </div>
                </div>
              </Link>
            ) : null
          )}
          {AllProducts["figures"].map((item) =>
            item.productName === "Barbara's Show" ? (
              <Link
                to={`/shop/figures/${item.productName}`}
                className="home-featured-goods-Links"
                key={uniqid()}
              >
                <div className="home-featured-goods-item">
                  <div className="home-featured-goods-item-category">
                    {item.productType}
                  </div>
                  <img
                    src={
                      "/shopping-cart-OdinProject/" + item.productLocationUrl
                    }
                    alt=""
                    className="home-featured-goods-item-image"
                  />
                  <div className="home-featured-goods-item-name">
                    {item.productName}
                  </div>
                  <div className="home-featured-goods-item-price">
                    {item.productPrice}
                    <span>$</span>
                  </div>
                </div>
              </Link>
            ) : null
          )}
          {AllProducts["clothes"].map((item) =>
            item.productName === "Ganyu Hoodie" ? (
              <Link
                to={`/shop/clothes/${item.productName}`}
                className="home-featured-goods-Links"
                key={uniqid()}
              >
                <div className="home-featured-goods-item">
                  <div className="home-featured-goods-item-category">
                    {item.productType}
                  </div>
                  <img
                    src={
                      "/shopping-cart-OdinProject/" + item.productLocationUrl
                    }
                    alt=""
                    className="home-featured-goods-item-image"
                  />
                  <div className="home-featured-goods-item-name">
                    {item.productName}
                  </div>
                  <div className="home-featured-goods-item-price">
                    {item.productPrice}
                    <span>$</span>
                  </div>
                </div>
              </Link>
            ) : null
          )}
          {AllProducts["mousePads"].map((item) =>
            item.productName === "Fischl Mouse Pad" ? (
              <Link
                to={`/shop/mousePads/${item.productName}`}
                className="home-featured-goods-Links"
                key={uniqid()}
              >
                <div className="home-featured-goods-item">
                  <div className="home-featured-goods-item-category">
                    {item.productType}
                  </div>
                  <img
                    src={
                      "/shopping-cart-OdinProject/" + item.productLocationUrl
                    }
                    alt=""
                    className="home-featured-goods-item-image"
                  />
                  <div className="home-featured-goods-item-name">
                    {item.productName}
                  </div>
                  <div className="home-featured-goods-item-price">
                    {item.productPrice}
                    <span>$</span>
                  </div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>

      <div className="home-shop-categories-container">
        <h3>Looking for something specific?</h3>
        <div className="home-shop-categories-holder">
          <div className="home-shop-categories-item">
            <Link to={"/shop/clothes"} className="home-categories-Links">
              <div>Clothes</div>
              <img
                src="/shopping-cart-OdinProject/images/clothes/clothes_hu_tao_hoodie_black.jpg"
                alt=""
                className="home-shop-categories-item-image"
              />
            </Link>
          </div>
          <div className="home-shop-categories-item">
            <Link to={"/shop/figures"} className="home-categories-Links">
              <div>Figures</div>
              <img
                src="/shopping-cart-OdinProject/images/figures/klee_figure_img1.jpg"
                alt=""
                className="home-shop-categories-item-image"
              />
            </Link>
          </div>
          <div className="home-shop-categories-item">
            <Link to={"/shop/mousePads"} className="home-categories-Links">
              <div>Mouse Pads</div>
              <img
                src="/shopping-cart-OdinProject/images/mousepads/raiden_mousepad.jpg"
                alt=""
                className="home-shop-categories-item-image"
              />
            </Link>
          </div>
          <div className="home-shop-categories-item">
            <Link to={"/shop/posters"} className="home-categories-Links">
              <div>Posters</div>
              <img
                src="/shopping-cart-OdinProject/images/posters/venti_poster_harp.jpg"
                alt=""
                className="home-shop-categories-item-image"
              />
            </Link>
          </div>
          <div className="home-shop-categories-item">
            <Link to={"/shop/stickers"} className="home-categories-Links">
              <div>Stickers</div>
              <img
                src="/shopping-cart-OdinProject/images/stickers/zhongli_sticker_1.png"
                alt=""
                className="home-shop-categories-item-image"
              />
            </Link>
          </div>
        </div>
      </div>
      <h3>Check Out what others have been saying about our merch!</h3>
      <div className="home-reviews-container">
        {AllProducts["clothes"].map((item) =>
          item.productName === "Ganyu Hoodie" ? (
            <div className="home-reviews-item" key={uniqid()}>
              <Link
                to={`/shop/clothes/${item.productName}`}
                className="home-reviews-item-name-Link"
              >
                <div className="home-reviews-item-product-name">
                  {item.productName}
                </div>
              </Link>
              <Link
                to={`/shop/clothes/${item.productName}`}
                className="home-reviews-item-image-Link"
              >
                <img
                  src="/shopping-cart-OdinProject/images/clothes/ganyu_hoodie_black.jpg"
                  alt=""
                  className="home-reviews-image"
                />
              </Link>
              {item.reviews.map((review) =>
                review.name === "Qi Qi" ? (
                  <div className="home-reviews-info">
                    <div className="home-reviews-item-name">{review.name}</div>
                    <div className="home-reviews-item-stars">
                      {review.stars}
                    </div>
                    <div className="home-reviews-item-text">{review.text}</div>
                  </div>
                ) : null
              )}
            </div>
          ) : null
        )}
        {AllProducts["clothes"].map((item) =>
          item.productName === "Paimon's Emergency Food" ? (
            <div className="home-reviews-item" key={uniqid()}>
              <Link
                to={`/shop/clothes/${item.productName}`}
                className="home-reviews-item-name-Link"
              >
                <div className="home-reviews-item-product-name">
                  {item.productName}
                </div>
              </Link>
              <Link
                to={`/shop/clothes/${item.productName}`}
                className="home-reviews-item-iamge-Link"
              >
                <img
                  src="/shopping-cart-OdinProject/images/clothes/paimon_hoodie_white.jpg"
                  alt=""
                  className="home-reviews-image"
                />
              </Link>
              {item.reviews.map((review) =>
                review.name === "Not Emergency Food!!" ? (
                  <div className="home-reviews-info" key={uniqid()}>
                    <div className="home-reviews-item-name">{review.name}</div>
                    <div className="home-reviews-item-stars">
                      {review.stars}
                    </div>
                    <div className="home-reviews-item-text">{review.text}</div>
                  </div>
                ) : null
              )}
            </div>
          ) : null
        )}
        {AllProducts["clothes"].map((item) =>
          item.productName === "Qi Qi Shirt" ? (
            <div className="home-reviews-item" key={uniqid()}>
              <Link
                to={`/shop/clothes/${item.productName}`}
                className="home-reviews-item-name-Link"
              >
                <div className="home-reviews-item-product-name">
                  {item.productName}
                </div>
              </Link>
              <Link
                to={`/shop/clothes/${item.productName}`}
                className="home-reviews-item-image-Link"
              >
                <img
                  src="/shopping-cart-OdinProject/images/clothes/qi_qi_shirt_blue.jpg"
                  alt=""
                  className="home-reviews-image"
                />
              </Link>
              {item.reviews.map((review) =>
                review.name === "Hu Tao" ? (
                  <div className="home-reviews-info" key={uniqid()}>
                    <div className="home-reviews-item-name">{review.name}</div>
                    <div className="home-reviews-item-stars">
                      {review.stars}
                    </div>
                    <div className="home-reviews-item-text">{review.text}</div>
                  </div>
                ) : null
              )}
            </div>
          ) : null
        )}
      </div>
      {/* <div>Welcome to Genshin Fan Shop!</div>
      <p>Get the best and the latest in Genshin Impact Fan Merchandise!</p>
      <h1 style={{ color: "red" }}>
        WIP - Checkout Shop, Cart and Checkout for content
      </h1> */}
    </div>
  );
};

export default Home;
