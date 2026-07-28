import React from 'react';

function Hero({ onDiscoverClick }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <img src="/bgg.png" alt="SHARK Fishing" className="hero-bg-img" />
        <div className="hero-subtle-overlay"></div>

        <div className="hero-content">
          <div className="hero-catchphrase-box">
            <div className="catchphrase-line"></div>
            <div className="catchphrase-text">
              <span className="light-text">THERE ARE PLENTY OF FISH IN THE SEA.</span>
              <span className="bold-text">I WANT THE SHARK.</span>
            </div>
          </div>

          <h1 className="hero-serif-title">SHARK</h1>
          <p className="hero-subline">ÉQUIPEZ VOTRE PASSION.</p>

          <button className="hero-pill-btn" onClick={onDiscoverClick}>
            DÉCOUVRIR LA COLLECTION
          </button>
        </div>

        <div className="hero-tech-badge">
          <div className="tech-badge-text">
            <p>MAX PERFORMANCE</p>
            <p className="highlight-text">100% CARBON REEL</p>
          </div>
          <div className="tech-badge-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;