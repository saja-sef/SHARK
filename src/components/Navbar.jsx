import React, { useState } from 'react';


const parsePrice = (price) => {
  if (typeof price === 'number' && !isNaN(price)) return price;
  if (typeof price === 'string') {
    const cleaned = price.replace(/[^0-9.]/g, '');
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  }
  return 0;
};


const Navbar = ({ onLogoClick, cartCount, wishlistCount, currentPage, onNavigate, cartItems = [], onRemoveItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNav = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const subtotal = cartItems.reduce((sum, item) => {
    const itemPrice = parsePrice(item.price);
    const itemQty = Number(item.quantity) || 1;
    return sum + (itemPrice * itemQty);
  }, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => { onLogoClick(); handleNav('home'); }}>
          <img src="/logo.png" alt="SHARK Elite Logo" className="logo-img" />
        </div>

        <ul className="navbar-links">
          <li>
            <a 
              href="#home" 
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            >
              ACCUEIL
            </a>
          </li>
          <li>
            <a 
              href="#shop" 
              className={currentPage === 'shop' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNav('shop'); }}
            >
              SHOP
            </a>
          </li>
          <li>
            <a href="#footer" onClick={handleContactClick}>
              CONTACT
            </a>
          </li>
        </ul>

        <div className="navbar-icons">
          <button 
            className={`icon-btn wishlist-icon-link ${currentPage === 'wishlist' ? 'active-icon' : ''}`} 
            onClick={() => handleNav('wishlist')}
            title="Liste d'envie"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={wishlistCount > 0 ? "#b58d3d" : "none"} stroke={wishlistCount > 0 ? "#b58d3d" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
          </button>

          <div className="cart-wrapper">
            <button 
              className={`icon-btn cart-btn ${currentPage === 'bag' ? 'active-icon' : ''}`} 
              onClick={() => handleNav('bag')}
              title="Panier"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

           
            <div className="cart-dropdown">
              <div className="cart-dropdown-items">
                {cartItems.length === 0 ? (
                  <p style={{ textAlign: 'center', margin: '20px 0', fontSize: '0.8rem', color: '#888' }}>
                    Votre panier est vide
                  </p>
                ) : (
                  cartItems.map((item) => {
                    const itemPrice = parsePrice(item.price);
                    const itemQty = Number(item.quantity) || 1;
                    return (
                      <div className="cart-dropdown-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-dropdown-item-info">
                          <p className="item-name">{item.name}</p>
                          <p className="item-price">{itemQty} × {itemPrice.toLocaleString()} DZD</p>
                        </div>
                        {onRemoveItem && (
                          <button 
                            className="cart-remove-btn" 
                            onClick={() => onRemoveItem(item.id)}
                            title="Supprimer"
                          >
                            &times;
                          </button>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              <div className="cart-dropdown-subtotal">
                <span>Sous-total :</span>
                <span className="subtotal-price">{subtotal.toLocaleString()} DZD</span>
              </div>

              <div className="cart-dropdown-actions">
                <button onClick={() => handleNav('bag')} className="btn-view-cart">VOIR LE PANIER</button>
                <button className="btn-checkout" onClick={() => handleNav('bag')}>COMMANDER</button>
              </div>
            </div>
          </div>

          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a 
          href="#home" 
          className={currentPage === 'home' ? 'active' : ''} 
          onClick={(e) => { e.preventDefault(); handleNav('home'); }}
        >
          ACCUEIL
        </a>
        <a 
          href="#shop" 
          className={currentPage === 'shop' ? 'active' : ''} 
          onClick={(e) => { e.preventDefault(); handleNav('shop'); }}
        >
          SHOP
        </a>
        <a href="#footer" onClick={handleContactClick}>
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;