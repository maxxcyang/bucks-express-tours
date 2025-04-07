import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tours.css';
import capitolImage from '../assets/capitol.jpg';
import jeffersonImage from '../assets/jefferson.jpg';
import lincolnImage from '../assets/lincoln.jpg';
import cherryImage from '../assets/cherry.jpg';

const Tours: React.FC = () => {
  const tourStops = [
    {
      id: 1,
      name: "U.S. Capitol",
      description: "Visit the iconic seat of the United States Congress",
      image: capitolImage
    },
    {
      id: 2,
      name: "Jefferson Memorial",
      description: "Explore the beautiful memorial dedicated to Thomas Jefferson",
      image: jeffersonImage
    },
    {
      id: 3,
      name: "Lincoln Memorial",
      description: "See the grand memorial honoring President Abraham Lincoln",
      image: lincolnImage
    },
    {
      id: 4,
      name: "Cherry Blossoms",
      description: "Experience the stunning cherry blossoms during peak season",
      image: cherryImage
    }
  ];

  return (
    <div className="tours">
      <section className="tour-hero">
        <h1>Our Tours</h1>
        <p>Explore Washington DC's most iconic landmarks</p>
      </section>

      <section className="tour-stops">
        <h2>Tour Stops</h2>
        <div className="stops-grid">
          {tourStops.map(stop => (
            <div key={stop.id} className="stop-card">
              <div className="stop-image">
                <img src={stop.image} alt={stop.name} loading="lazy" />
              </div>
              <div className="stop-info">
                <h3>{stop.name}</h3>
                <p>{stop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing">
        <h2>Tour Pricing</h2>
        <div className="pricing-cards">
          <div className="price-card">
            <h3>Standard Tour</h3>
            <p className="price">$60</p>
            <p className="price-sub">$45 for kids</p>
            <ul>
              <li>2-hour guided tour</li>
              <li>12 iconic stops</li>
              <li>Photo opportunities</li>
              <li>Expert commentary</li>
            </ul>
            <Link to="/booking" className="book-button">Book Now</Link>
          </div>
          <div className="price-card featured">
            <h3>Private Tour</h3>
            <p className="price">$80</p>
            <p className="price-sub">$60 for kids</p>
            <ul>
              <li>Customizable 2-hour tour</li>
              <li>Flexible scheduling</li>
              <li>Exclusive guide</li>
              <li>Personalized experience</li>
            </ul>
            <Link to="/booking" className="book-button">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours; 