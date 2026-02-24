import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaBehance } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xqaywwdv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page contact">
      <div className="container">
        <h1>Contact Me</h1>
        <p className="center-text">Let's connect and collaborate!</p>
        
        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-icon">📞</span>
            <h3>Phone</h3>
            <p>+977-9761831697</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📧</span>
            <h3>Email</h3>
            <p><a href="mailto:nirjaladeshar98@gmail.com">nirjaladeshar98@gmail.com</a></p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">🔗</span>
            <h3>Social</h3>
            <div className="social-links-list">
              <a href="https://linkedin.com/in/nirjala-deshar-69b25a253" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a href="https://github.com/NeeluDeshar" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" /> GitHub
              </a>
              <a href="https://www.facebook.com/nirjala.desar/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" /> Facebook
              </a>
              <a href="https://www.instagram.com/nirjalade3/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a>
              <a href="https://www.behance.net/nirjaladeshar98" target="_blank" rel="noopener noreferrer">
                <FaBehance className="social-icon" /> Behance
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
