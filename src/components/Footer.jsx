import React from 'react';

const Footer = () => {
  return (
    
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        
        <div className="footer-newsletter">
          <div className="newsletter-text">
            <h2 className="newsletter-title">REJOIGNEZ L'ÉLITE.</h2>
            <p className="newsletter-desc">
              Inscrivez-vous pour recevoir nos classements exclusifs, nos
              guides techniques et les invitations à nos expéditions privées.
            </p>
          </div>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label className="input-label">ADRESSE E-MAIL</label>
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="newsletter-input" 
                required 
              />
            </div>
            <button type="submit" className="subscribe-btn">S'ABONNER</button>
          </form>
        </div>

        <div className="footer-divider"></div>

        
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/logo.png" alt="SHARK Elite" className="footer-logo" />
            <p className="brand-desc">
              L'excellence technique pour les prédateurs des mers. Conçu par des passionnés, pour l'élite de l'angling.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="col-title">PRODUITS</h4>
              <ul>
                <li><a href="#">RODS</a></li>
                <li><a href="#">REELS</a></li>
                <li><a href="#">LINES</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">SERVICE</h4>
              <ul>
                <li><a href="#">SHIPPING</a></li>
                <li><a href="#">RETURNS</a></li>
                <li><a href="#">CONTACT</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">COMPAGNIE</h4>
              <ul>
                <li><a href="#">STORY</a></li>
                <li><a href="#">AMBASSADEURS</a></li>
                <li><a href="#">PRESSE</a></li>
              </ul>
            </div>
          </div>
        </div>

     
        <div className="footer-bottom">
          <p>© 2026 SHARK Elite Angling. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;