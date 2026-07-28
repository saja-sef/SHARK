import React, { useState } from 'react';


export const PRODUCTS = [
  { id: 1, name: "KRAKEN PRO ROD 2.40M", category: "RODS", price: "450 €", image: "/pic1.png", tag: "NEW" },
  { id: 2, name: "ELITE X CARBON REEL", category: "REELS", price: "620 €", image: "/pic2.png", tag: "POPULAR" },
  { id: 3, name: "BRAIDED LINE GOLD 300M", category: "LINES", price: "85 €", image: "/pic3.png", tag: "" },
  { id: 4, name: "MARINE VANGUARD BAG", category: "BAGAGERIE", price: "290 €", image: "/pic4.png", tag: "LIMITED" },
  { id: 5, name: "TITANIUM LEADER WIRE", category: "LINES", price: "45 €", image: "/pic1.png", tag: "" },
  { id: 6, name: "BLACK SHARK ROD 2.70M", category: "RODS", price: "520 €", image: "/pic2.png", tag: "NEW" },
  { id: 7, name: "APEX DRAG REEL 5000", category: "REELS", price: "780 €", image: "/pic3.png", tag: "BESTSELLER" },
  { id: 8, name: "EXPEDITION DUFFEL 80L", category: "BAGAGERIE", price: "340 €", image: "/pic4.png", tag: "" }
];

const ShopPage = ({ wishlist, onToggleWishlist, onAddToCart }) => {
  const [selectedCat, setSelectedCat] = useState('ALL');
  const [sortBy, setSortBy] = useState('DEFAULT');


  const filteredProducts = PRODUCTS.filter(p => {
    if (selectedCat === 'ALL') return true;
    return p.category === selectedCat;
  });

  return (
    <div className="shop-page">
    
      <div className="shop-header-banner">
        <h1 className="shop-banner-title">NOTRE CATALOGUE D'ÉLITE</h1>
        <p className="shop-banner-sub">ÉQUIPEMENTS DE PÊCHE HAUTE PERFORMANCE</p>
      </div>

      <div className="shop-container">
        
        <div className="shop-toolbar">
          <div className="category-filters">
            {['ALL', 'RODS', 'REELS', 'LINES', 'BAGAGERIE'].map(cat => (
              <button
                key={cat}
                className={`cat-btn ${selectedCat === cat ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="shop-sort">
            <span className="sort-label">TRIER PAR:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
              <option value="DEFAULT">Nouveautés</option>
              <option value="PRICE_LOW">Prix: Croissant</option>
              <option value="PRICE_HIGH">Prix: Décroissant</option>
            </select>
          </div>
        </div>

       
        <div className="shop-grid">
          {filteredProducts.map(product => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div key={product.id} className="shop-card">
                <div className="shop-card-image">
                  <img src={product.image} alt={product.name} />
                  {product.tag && <span className="shop-badge">{product.tag}</span>}
                  
                  
                  <button 
                    className={`wishlist-icon-btn ${isWishlisted ? 'active' : ''}`} 
                    onClick={() => onToggleWishlist(product.id)}
                    title={isWishlisted ? "Retirer des favoris" : "Ajouter aux favoris"}
                  >
                    {isWishlisted ? '♥' : '♡'}
                  </button>

                  <button 
                    className="shop-add-btn"
                    onClick={() => onAddToCart(product)}
                  >
                    AJOUTER AU PANIER
                  </button>
                </div>

                <div className="shop-card-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;