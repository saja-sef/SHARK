import React from 'react';
import { PRODUCTS } from './ShopPage';

const WishlistPage = ({ wishlist, onToggleWishlist, onAddToCart, onNavigateToShop }) => {
 
  const favoritedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1 className="wishlist-title">VOTRE LISTE D'ENVIE</h1>
        <div className="gold-underline"></div>
      </div>

      <div className="wishlist-container">
        {favoritedProducts.length === 0 ? (
         
          <div className="empty-wishlist">
            <div className="empty-heart-icon">♡</div>
            <h2>VOTRE LISTE D'ENVIE EST VIDE</h2>
            <p>Découvrez nos collections d'exception et ajoutez vos articles préférés.</p>
            <button className="gold-pill-btn" onClick={onNavigateToShop}>
              EXPLORER LE SHOP
            </button>
          </div>
        ) : (
         
          <div className="wishlist-grid">
            {favoritedProducts.map(product => (
              <div key={product.id} className="wishlist-card">
                <button 
                  className="remove-wishlist-btn"
                  onClick={() => onToggleWishlist(product.id)}
                  title="Retirer"
                >
                  ✕
                </button>
                <div className="wishlist-img-box">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="wishlist-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">{product.price}</span>
                  <button 
                    className="wishlist-add-cart-btn"
                    onClick={() => onAddToCart(product)}
                  >
                    AJOUTER AU PANIER
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;