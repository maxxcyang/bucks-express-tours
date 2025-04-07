import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Booking.css';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'bucksexpresstours@gmail.com'
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="booking">
      <h1>Book Your Tour</h1>
      <div className="booking-container">
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Please include your preferred tour date and any special requests"
            />
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Booking Request'}
          </button>
          {status === 'success' && (
            <p className="success-message">Booking request sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="error-message">Error sending booking request. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Booking; 