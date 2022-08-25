import "./styles/shop.css"

const Shop = () => {
  return (
    <div className="shop-content">
      <h2 className="shop-header">Shop Content</h2>
      <div className="shop-sidebar">
        <div className="sidebar-option">Posters</div>
        <div className="sidebar-option">Figures</div>
        <div className="sidebar-option">Mouse Pads</div>
        <div className="sidebar-option">Clothes</div>
        <div className="sidebar-option">Stickers</div>
      </div>
      <div className="shop-articles">
        <div className="shop-article"> Article 1</div>
        <div className="shop-article"> Article 2</div>
        <div className="shop-article"> Article 3</div>
        <div className="shop-article"> Article 4</div>
        <div className="shop-article"> Article 5</div>
      </div>
    </div>
  );
};

export default Shop;
