import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">BUCKS Express Tours</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/booking">Book Now</Link>
      </div>
      <div className="navbar-contact">
        <a href="tel:2407260966">(240) 726-0966</a>
        <a href="tel:2026993674">(202) 699-3674</a>
      </div>
    </nav>
  );
};

export default Navbar; 