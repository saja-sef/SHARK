import React from 'react';

const products = [
  {
    id: 1,
    title: 'MOULINET KRAKEN PRO',
    subtitle: 'Série Limitée Deep Sea',
    price: '899,00 DZA',
    image: '/prod1.png',
    isNew: true
  },
  {
    id: 2,
    title: 'CANNE CARBON ELITE X',
    subtitle: 'Ultra-Sensibilité High-Modulus',
    price: '1 250,00 DZA',
    image: '/prod2.png',
    isNew: false
  },
  {
    id: 3,
    title: 'VESTE TECHNIQUE APEX',
    subtitle: 'Protection Tempête G-III',
    price: '450,00 DZA',
    image: '/prod3.png',
    isNew: false
  },
  {
    id: 4,
    title: 'SAC DE TRANSPORT MARINE',
    subtitle: 'Étanche IPX8 - 60 Litres',
    price: '320,00DZA',
    image: '/prod4.png',
    isNew: false
  }
];

const ApexCollection = ({ onAddToCart }) => {
  return (
    <section className="apex-section">
      <div className="apex-header">
        <div className="apex-title-box">
          <span className="apex-tag">NOUVEAUTÉS 2024</span>
          <h2 className="apex-title">COLLECTION APEX</h2>
        </div>
        <a href="#" className="apex-see-all">VOIR TOUTE LA COLLECTION</a>
      </div>

      <div className="apex-grid">
        {products.map((item) => (
          <div 
            key={item.id} 
            className="apex-card"
            onClick={() => onAddToCart(item)} 
          >
            <div className="apex-image-container">
              {item.isNew && <span className="badge-new">NEW</span>}
              <img src={item.image} alt={item.title} />
              
             
              <button 
                className="apex-add-btn"
                onClick={(e) => {
                  e.stopPropagation(); 
                  onAddToCart(item);
                }}
              >
                AJOUTER AU PANIER
              </button>
            </div>
            
            <div className="apex-info">
              <h3 className="apex-card-title">{item.title}</h3>
              <p className="apex-card-subtitle">{item.subtitle}</p>
              <p className="apex-card-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApexCollection;