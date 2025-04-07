import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tours.css';

const tourStops = [
  {
    name: 'Capitol',
    description: 'Visit the iconic United States Capitol building'
  },
  {
    name: 'Jefferson Memorial',
    description: 'Explore the beautiful Jefferson Memorial'
  },
  {
    name: 'Lincoln Memorial',
    description: 'See the majestic Lincoln Memorial'
  },
  {
    name: 'Washington Monument',
    description: 'View the iconic Washington Monument'
  },
  {
    name: 'National Mall',
    description: 'Experience the historic National Mall'
  },
  {
    name: 'Smithsonian Museums',
    description: 'Pass by the world-famous Smithsonian Museums'
  },
  {
    name: 'White House',
    description: 'See the White House from the outside'
  },
  {
    name: 'National Archives',
    description: 'View the National Archives building'
  },
  {
    name: 'National Gallery of Art',
    description: 'Pass by the National Gallery of Art'
  },
  {
    name: 'National Air and Space Museum',
    description: 'See the National Air and Space Museum'
  },
  {
    name: 'National Museum of Natural History',
    description: 'Pass by the National Museum of Natural History'
  },
  {
    name: 'National Museum of American History',
    description: 'View the National Museum of American History'
  }
];

const Tours: React.FC = () => {
  return (
    <div className="tours">
      <section className="tour-hero">
        <h1>Our Tours</h1>
        <p>Experience Washington DC's most iconic landmarks in comfort and style</p>
      </section>

      <section className="tour-details">
        <div className="tour-info">
          <h2>Tour Information</h2>
          <ul>
            <li>Every weekend</li>
            <li>2 hours total duration</li>
            <li>Comfortable golf cart transportation</li>
            <li>10-15 minutes at each stop for photos and exploration</li>
            <li>Professional tour guide</li>
          </ul>
        </div>

        <div className="tour-stops">
          <h2>Tour Stops</h2>
          <div className="stops-grid">
            {tourStops.map((stop, index) => (
              <div key={index} className="stop-card">
                <h3>{stop.name}</h3>
                <p>{stop.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tour-cta">
          <h2>Ready to Book Your Tour?</h2>
          <Link to="/booking" className="cta-button">Book Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Tours; 