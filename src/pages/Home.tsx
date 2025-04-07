import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BUCKS Express Tours</h1>
          <p>Experience Washington DC's most iconic landmarks in comfort and style</p>
          <Link to="/booking" className="cta-button">Book Your Tour</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Weekend Tours</h2>
          <p>Join us every weekend for an unforgettable 2-hour golf cart tour</p>
        </div>
        <div className="feature">
          <h2>12 Iconic Stops</h2>
          <p>Visit the Capitol, Jefferson Memorial, Lincoln Memorial, and more!</p>
        </div>
        <div className="feature">
          <h2>Photo Opportunities</h2>
          <p>10-15 minutes at each stop for photos and exploration</p>
        </div>
      </section>

      <section className="pricing">
        <h2>Tour Pricing</h2>
        <div className="pricing-cards">
          <div className="price-card">
            <h3>Cherry Blossom Tour</h3>
            <p className="price">$60</p>
            <p className="price-sub">$45 for kids</p>
            <Link to="/booking" className="book-button">Book Now</Link>
          </div>
          <div className="price-card">
            <h3>Private Tour</h3>
            <p className="price">$80</p>
            <p className="price-sub">$60 for kids</p>
            <Link to="/booking" className="book-button">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 