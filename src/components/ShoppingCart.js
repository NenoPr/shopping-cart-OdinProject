import "./styles/shopping-cart.css"
const ShoppingCart = () => {
  return (
    <div className="shopping-cart-content">
      <div className="shopping-cart-headline">Your Shopping Cart</div>
      <div className="shopping-cart-list">
        <div className="shopping-cart-item">
          <div className="shopping-cart-product-name">T-shirt</div>
          <div className="shopping-cart-product-amount">3</div>
        </div>
        <div className="shopping-cart-item">
          <div className="shopping-cart-product-name">Mousepad</div>
          <div className="shopping-cart-product-amount">1</div>
        </div>
        <div className="shopping-cart-item">
          <div className="shopping-cart-product-name">Figure</div>
          <div className="shopping-cart-product-amount">2</div>
        </div>
        <div className="shopping-cart-item">
          <div className="shopping-cart-product-name">Sticker</div>
          <div className="shopping-cart-product-amount">4</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
