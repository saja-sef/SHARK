import React, { useState } from 'react';

const IconTrash = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const IconMinus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const IconShoppingBag = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#d1d1d1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const IconTruck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b58d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b58d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconCreditCard = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const IconCheckCircle = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#b58d3d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const parsePrice = (price) => {
  if (typeof price === 'number' && !isNaN(price)) return price;
  if (typeof price === 'string') {
    const cleaned = price.replace(/[^0-9.]/g, '');
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  }
  return 0;
};

const Bag = ({ cartItems = [], onUpdateQuantity, onRemoveItem, onContinueShopping }) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    wilaya: '',
    address: '',
    paymentMethod: 'cod',
    userRip: '',
    transactionCode: ''
  });

  const subtotal = cartItems.reduce((sum, item) => {
    const itemPrice = parsePrice(item.price);
    const itemQty = Number(item.quantity) || 1;
    return sum + (itemPrice * itemQty);
  }, 0);

  const shippingFee = subtotal > 0 ? 800 : 0;
  const grandTotal = subtotal + shippingFee;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.wilaya) {
      alert("Veuillez remplir tous les champs obligatoires (Nom, Téléphone, Wilaya)");
      return;
    }

    if (formData.paymentMethod === 'baridimob') {
      if (!formData.userRip || !formData.transactionCode) {
        alert("Veuillez saisir votre numéro RIP/CCP ainsi que le code/numéro de transaction BaridiMob");
        return;
      }
    }

    setIsOrderSubmitted(true);
  };

  if (isOrderSubmitted) {
    return (
      <div className="bag-page">
        <div className="bag-container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <IconCheckCircle />
          </div>
          <h1 style={{ fontFamily: 'Cinzel', fontSize: '2rem', letterSpacing: '2px', color: '#0c1b33' }}>
            MERCI POUR VOTRE COMMANDE
          </h1>
          <p style={{ color: '#666', margin: '15px 0', fontSize: '0.9rem' }}>
            Votre commande a été enregistrée avec succès. Nous vous contacterons au <strong>{formData.phone}</strong> pour confirmer la livraison.
          </p>
          <button className="gold-pill-btn" onClick={onContinueShopping} style={{ marginTop: '20px' }}>
            RETOURNER AU CATALOGUE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bag-page">
      <div className="bag-container">
        <div className="bag-header">
          <h1 className="bag-title">VOTRE PANIER</h1>
          <p className="bag-subtitle">
            {cartItems.length} {cartItems.length === 1 ? 'ARTICLE' : 'ARTICLES'} DANS VOTRE PANIER
          </p>
          <div className="gold-underline"></div>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-bag-box">
            <div style={{ marginBottom: '15px' }}>
              <IconShoppingBag />
            </div>
            <h2>VOTRE PANIER EST VIDE</h2>
            <p>Vous n'avez pas encore ajouté d'articles à votre panier.</p>
            <button className="gold-pill-btn" onClick={onContinueShopping}>
              DÉCOUVRIR LA COLLECTION
            </button>
          </div>
        ) : (
          <div className="bag-grid">
            <div className="bag-items-list">
              {cartItems.map((item) => {
                const itemPrice = parsePrice(item.price);
                const itemQty = Number(item.quantity) || 1;
                const itemTotal = itemPrice * itemQty;

                return (
                  <div className="bag-item-card" key={item.id}>
                    <div className="bag-item-img-box">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="bag-item-details">
                      <span className="bag-item-cat">{item.category}</span>
                      <h3 className="bag-item-name">{item.name}</h3>
                      <p className="bag-item-unit-price">{itemPrice.toLocaleString()} DZD</p>

                      <div className="qty-picker">
                        <button 
                          className="qty-btn" 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                        >
                          <IconMinus />
                        </button>
                        <span className="qty-val">{itemQty}</span>
                        <button 
                          className="qty-btn" 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                        >
                          <IconPlus />
                        </button>
                      </div>
                    </div>

                    <div className="bag-item-actions">
                      <p className="bag-item-total">
                        {itemTotal.toLocaleString()} DZD
                      </p>
                      <button 
                        className="bag-remove-btn" 
                        onClick={() => onRemoveItem(item.id)}
                        title="Supprimer l'article"
                      >
                        <IconTrash />
                      </button>
                    </div>
                  </div>
                );
              })}

              <button className="back-to-shop-btn" onClick={onContinueShopping}>
                ← CONTINUER MES ACHATS
              </button>
            </div>

            <div className="bag-summary-card">
              <h2 className="summary-title">RÉSUMÉ DE LA COMMANDE</h2>
              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Sous-total</span>
                <span>{subtotal.toLocaleString()} DZD</span>
              </div>

              <div className="summary-row">
                <span>Livraison (58 Wilayas)</span>
                <span>{shippingFee.toLocaleString()} DZD</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row grand-total-row">
                <span>TOTAL</span>
                <span className="grand-total-price">{grandTotal.toLocaleString()} DZD</span>
              </div>

              {!showPaymentForm ? (
                <button 
                  className="checkout-btn"
                  onClick={() => setShowPaymentForm(true)}
                >
                  PASSER AU PAIEMENT
                </button>
              ) : (
                <form className="payment-form" onSubmit={handleConfirmOrder} style={{ marginTop: '20px' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '1px', marginBottom: '15px', color: '#0c1b33', textTransform: 'uppercase' }}>
                    Livraison & Paiement
                  </h3>

                  <div className="form-group">
                    <input 
                      type="text" 
                      name="fullName" 
                      placeholder="Nom & Prénom *" 
                      value={formData.fullName} 
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Numéro de téléphone *" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <input 
                      type="text" 
                      name="wilaya" 
                      placeholder="Wilaya / Ville *" 
                      value={formData.wilaya} 
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <input 
                      type="text" 
                      name="address" 
                      placeholder="Adresse de livraison" 
                      value={formData.address} 
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="payment-options" style={{ margin: '18px 0' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', marginBottom: '10px', color: '#555' }}>
                      MODE DE PAIEMENT :
                    </label>
                    
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="cod" 
                        checked={formData.paymentMethod === 'cod'} 
                        onChange={handleInputChange} 
                      />
                      <IconTruck />
                      <span>Paiement à la livraison</span>
                    </label>

                    <label className="radio-label" style={{ marginTop: '10px' }}>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="baridimob" 
                        checked={formData.paymentMethod === 'baridimob'} 
                        onChange={handleInputChange} 
                      />
                      <IconCreditCard />
                      <span>BaridiMob / Virement CCP</span>
                    </label>

                    {formData.paymentMethod === 'baridimob' && (
                      <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div className="form-group">
                          <input 
                            type="text" 
                            name="userRip" 
                            placeholder="Votre Numéro RIP ou CCP *" 
                            value={formData.userRip} 
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input 
                            type="text" 
                            name="transactionCode" 
                            placeholder="Code / N° de Transaction *" 
                            value={formData.transactionCode} 
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#666', fontStyle: 'italic', margin: 0 }}>
                          * Entrez votre numéro RIP/CCP et le code de transaction reçu après le virement BaridiMob.
                        </p>
                      </div>
                    )}
                  </div>

                  <button type="submit" className="checkout-btn" style={{ backgroundColor: '#b58d3d' }}>
                    CONFIRMER LA COMMANDE ({grandTotal.toLocaleString()} DZD)
                  </button>
                  
                  <button 
                    type="button" 
                    className="back-to-shop-btn" 
                    onClick={() => setShowPaymentForm(false)}
                    style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}
                  >
                    Annuler
                  </button>
                </form>
              )}

              <div className="trust-badges" style={{ marginTop: '22px' }}>
                <div className="trust-item">
                  <IconTruck />
                  <span>Livraison Express 58 Wilayas</span>
                </div>
                <div className="trust-item">
                  <IconShield />
                  <span>Garantie d'Authenticité 100%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;