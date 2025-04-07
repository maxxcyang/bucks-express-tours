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
    </nav>
  );
};

export default Navbar; 