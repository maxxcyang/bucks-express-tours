import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Booking.css';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    tourType: 'standard',
    guests: 1
  });
  
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key from environment variables
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error('EmailJS public key not found in environment variables');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });
    
    try {
      // Get EmailJS configuration from environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      
      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing');
      }
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tour_date: formData.date,
          tour_type: formData.tourType,
          guests: formData.guests
        }
      );
      
      console.log('Email sent successfully:', result);
      
      setStatus({
        type: 'success',
        message: 'Your booking request has been sent successfully! We will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        tourType: 'standard',
        guests: 1
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'There was an error sending your booking request. Please try again or contact us directly.'
      });
    }
  };

  // Function to get the next weekend date
  const getNextWeekendDate = (): string => {
    const today = new Date();
    const day = today.getDay();
    
    // If today is Saturday (6) or Sunday (0), return today
    if (day === 6 || day === 0) {
      return today.toISOString().split('T')[0];
    }
    
    // Otherwise, find the next Saturday
    const daysUntilSaturday = (6 - day + 7) % 7;
    const nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);
    return nextSaturday.toISOString().split('T')[0];
  };

  // Function to handle date change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFormData(prev => ({
      ...prev,
      date: selectedDate
    }));
  };

  // Function to reset the form
  const resetForm = () => {
    setStatus({ type: null, message: '' });
  };

  return (
    <div className="booking">
      <section className="booking-hero">
        <h1>Book Your Tour</h1>
        <p>Fill out the form below to reserve your spot</p>
      </section>

      <section className="booking-form">
        {status.type === 'success' ? (
          <div className="status-message success">
            {status.message}
            <button onClick={resetForm} className="reset-button">Book Another Tour</button>
          </div>
        ) : status.type === 'error' ? (
          <div className="status-message error">
            {status.message}
            <button onClick={resetForm} className="reset-button">Try Again</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Preferred Tour Date (Weekends Only)</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleDateChange}
                min={getNextWeekendDate()}
                required
                pattern="\d{4}-\d{2}-\d{2}"
                title="Please select a weekend date"
              />
              <small className="date-note">Tours are only available on Saturdays and Sundays</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="tourType">Tour Type</label>
              <select
                id="tourType"
                name="tourType"
                value={formData.tourType}
                onChange={handleChange}
                required
              >
                <option value="standard">Standard Tour ($60)</option>
                <option value="private">Private Tour ($80)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="20"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-button">Submit Booking Request</button>
          </form>
        )}
      </section>
      
      <section className="booking-info">
        <h2>Need Help?</h2>
        <p>If you have any questions or need assistance with your booking, please contact us directly:</p>
        <div className="contact-info">
          <p>Phone: (240) 726-0966 or (202) 699-3674</p>
          <p>Email: bucksexpresstours@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Booking; 