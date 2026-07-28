import React from 'react';

const reviews = [
  {
    id: 1,
    rating: 5,
    text: `"La Kraken Pro a changé ma vision de la pêche sportive. Une fluidité inégalée même après des semaines en mer agitée. C'est l'équipement définitif."`,
    initials: 'JS',
    name: 'JEAN-SÉBASTIEN M.',
    role: 'SKIPPER PROFESSIONNEL'
  },
  {
    id: 2,
    rating: 5,
    text: `"Le carbone de l'Elite X est d'une résonance bluffante. Chaque vibration est transmise avec une clarté chirurgicale. Un must-have."`,
    initials: 'PL',
    name: 'PIERRE-LOUIS R.',
    role: 'GUIDE DE PÊCHE'
  },
  {
    id: 3,
    rating: 5,
    text: `"La bagagerie marine est à la hauteur des attentes. Étanche, robuste et surtout très élégante. Je ne sors plus sans."`,
    initials: 'ML',
    name: 'MARC L.',
    role: 'CLIENT ELITE'
  }
];

const ExcellenceReviews = () => {
  return (
    <div className="excellence-reviews-wrapper">
      
      <section className="excellence-banner">
        
        <img src="/bag-banner.jpg" alt="Bagagerie" className="excellence-bg-img" />
        <div className="excellence-overlay"></div>
        
        <div className="excellence-content">
          <span className="excellence-tag">INGÉNIERIE D'EXCEPTION</span>
          <h2 className="excellence-title">
            L'EXCELLENCE SANS<br />COMPROMIS.
          </h2>
          <p className="excellence-description">
            Chaque détail de notre gamme bagagerie a été pensé pour les<br />
            conditions les plus rudes. Matériaux balistiques, finitions en or<br />
            14k et ergonomie absolue.
          </p>
        </div>
      </section>

      {/* 2. REVIEWS SECTION */}
      <section className="reviews-section">
        <div className="reviews-header">
          <h2 className="reviews-title">L'AVIS DES PROFESSIONNELS</h2>
          <div className="gold-underline"></div>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="stars-container">
                {'★'.repeat(rev.rating)}
              </div>
              <p className="review-text">{rev.text}</p>
              <div className="review-author">
                <div className="author-avatar">{rev.initials}</div>
                <div className="author-info">
                  <h4 className="author-name">{rev.name}</h4>
                  <span className="author-role">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExcellenceReviews;