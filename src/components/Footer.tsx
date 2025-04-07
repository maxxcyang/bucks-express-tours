import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: (240) 726-0966 or (202) 699-3674</p>
          <p>Email: bucksexpresstours@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BUCKS Express Tours. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 