import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>BUCKS Express Tours</h1>
          <p>Experience Washington DC in comfort and style</p>
          <Link to="/booking" className="cta-button">Book Your Tour</Link>
        </div>
      </section>
      
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Comfortable Transportation</h3>
            <p>Travel in our modern, air-conditioned vehicles</p>
          </div>
          <div className="feature">
            <h3>Expert Guides</h3>
            <p>Learn from knowledgeable local guides</p>
          </div>
          <div className="feature">
            <h3>Flexible Scheduling</h3>
            <p>Customize your tour to fit your schedule</p>
          </div>
          <div className="feature">
            <h3>Affordable Prices</h3>
            <p>Competitive rates for unforgettable experiences</p>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <h2>Ready to Explore DC?</h2>
        <p>Book your tour today and create memories that last a lifetime</p>
        <Link to="/booking" className="cta-button">Book Now</Link>
      </section>
    </div>
  );
};

export default Home; 