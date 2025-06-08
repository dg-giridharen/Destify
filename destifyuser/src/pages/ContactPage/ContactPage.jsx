import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import AuthModal from '../../components/AuthModal/AuthModal.jsx';
import './ContactPage.css';

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <main className="container">
        <h1 className="page-title">Contact Us</h1>
        <div className="contact-container">
          
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you. Here's how you can reach us.</p>
            <div className="contact-item">
              <h4>Address</h4>
              <p>123 Wanderlust Lane, Travel City, 600001</p>
            </div>
            <div className="contact-item">
              <h4>Email</h4>
              <p>support@destify.com</p>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send Us a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

        </div>
      </main>
      <Footer />
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ContactPage;