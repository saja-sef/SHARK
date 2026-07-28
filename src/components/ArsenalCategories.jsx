import React from 'react';

const categories = [
  {
    id: 1,
    title: 'CANNES',
    subtitle: 'PERFORMANCE CARBON',
    image: '/pic1.png'
  },
  {
    id: 2,
    title: 'MOULINETS',
    subtitle: 'INGÉNIERIE MARINE',
    image: '/pic2.png'
  },
  {
    id: 3,
    title: 'TRESSES',
    subtitle: 'RÉSISTANCE EXTRÊME',
    image: '/pic3.png'
  },
  {
    id: 4,
    title: 'LEURRES',
    subtitle: 'PRÉCISION ARTISANALE',
    image: '/pic4.png'
  }
];

const ArsenalCategories = () => {
  return (
    <section className="arsenal-section">
      <div className="arsenal-header">
        <div className="arsenal-title-container">
          <div className="gold-bar-vertical"></div>
          <h2 className="arsenal-title">L'ARSENAL</h2>
        </div>
        <div className="arsenal-subtitle-container">
          <p className="arsenal-subtitle">TECHNOLOGIE MARINE DE POINTE<br/>POUR LES PRÉDATEURS DE L'OCÉAN.</p>
          <div className="gold-bar-horizontal-right"></div>
        </div>
      </div>

      <div className="arsenal-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="arsenal-card">
            <div className="arsenal-card-image">
              <img src={cat.image} alt={cat.title} />
            </div>
            <div className="arsenal-card-content">
              <div className="gold-bar-small"></div>
              <h3>{cat.title}</h3>
              <p className="arsenal-card-subtitle">{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArsenalCategories;