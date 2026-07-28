import React from 'react';

const Navbar = ({ onLogoClick, cartCount, wishlistCount, currentPage, onNavigate }) => {
  
  const handleContactClick = (e) => {
    e.preventDefault();
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
     
        <div className="logo" onClick={() => { onLogoClick(); onNavigate('home'); }}>
          <img src="/logo.png" alt="SHARK Elite Logo" className="logo-img" />
        </div>

       
        <ul className="navbar-links">
          <li>
            <a 
              href="#home" 
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            >
              ACCUEIL
            </a>
          </li>
          <li>
            <a 
              href="#shop" 
              className={currentPage === 'shop' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}
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
            onClick={() => onNavigate('wishlist')}
            title="Liste d'envie"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={wishlistCount > 0 ? "#b58d3d" : "none"} stroke={wishlistCount > 0 ? "#b58d3d" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
          </button>

          
          <button 
            className={`icon-btn cart-btn ${currentPage === 'bag' ? 'active-icon' : ''}`} 
            onClick={() => onNavigate('bag')}
            title="Panier"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;