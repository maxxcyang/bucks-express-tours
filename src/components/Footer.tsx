import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BUCKS Express Tours</h3>
          <p>Experience Washington DC in comfort and style</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <a href="tel:2407260966">(240) 726-0966</a>
          </p>
          <p>
            <a href="tel:2026993674">(202) 699-3674</a>
          </p>
          <p>
            <a href="mailto:bucksexpresstours@gmail.com">bucksexpresstours@gmail.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/booking">Book Now</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BUCKS Express Tours. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 