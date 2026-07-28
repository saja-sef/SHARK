import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArsenalCategories from './components/ArsenalCategories';
import ApexCollection from './components/ApexCollection';
import ExcellenceReviews from './components/ExcellenceReviews';
import ShopPage from './components/ShopPage';
import WishlistPage from './components/WishlistPage';
import Bag from './components/Bag'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  const [animKey, setAnimKey] = useState(0);
  const [currentPage, setCurrentPage] = useState('home'); 
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleLogoClick = () => {
    setAnimKey(prev => prev + 1);
    setCurrentPage('home'); 
  };

  const handleExploreApex = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById('apex-collection');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('apex-collection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + 1
        };
        return updated;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === productId) {
            const newQty = (item.quantity || 1) + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : item;
          }
          return item;
        })
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleToggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="App">
      <Navbar 
        onLogoClick={handleLogoClick} 
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {currentPage === 'home' && (
        <>
          <Hero animKey={animKey} onDiscoverClick={handleExploreApex} />
          <ArsenalCategories />
          <div id="apex-collection">
            <ApexCollection onAddToCart={handleAddToCart} />
          </div>
          <ExcellenceReviews />
        </>
      )}

      {currentPage === 'shop' && (
        <ShopPage 
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
        />
      )}

      {currentPage === 'wishlist' && (
        <WishlistPage 
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onNavigateToShop={() => setCurrentPage('shop')}
        />
      )}

      {currentPage === 'bag' && (
        <Bag 
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveFromCart}
          onContinueShopping={() => setCurrentPage('shop')}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;