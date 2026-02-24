import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope, FaBehance } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nirjala Deshar</h3>
            <p>Computer Engineering Student</p>
            <p>Front-End Developer | UI/UX Designer | QA Specialist</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavigation('/')}>Home</button></li>
              <li><button onClick={() => handleNavigation('/about')}>About</button></li>
              <li><button onClick={() => handleNavigation('/projects')}>Projects</button></li>
              <li><button onClick={() => handleNavigation('/contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://linkedin.com/in/nirjala-deshar-69b25a253" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/NeeluDeshar" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon" />
                <span>GitHub</span>
              </a>
              <a href="https://www.facebook.com/nirjala.desar/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook className="social-icon" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/nirjalade3/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram className="social-icon" />
                <span>Instagram</span>
              </a>
              <a href="https://www.behance.net/nirjaladeshar98" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaBehance className="social-icon" />
                <span>Behance</span>
              </a>
              <a href="mailto:nirjaladeshar98@gmail.com" className="social-link">
                <FaEnvelope className="social-icon" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 <a href="mailto:nirjaladeshar98@gmail.com" style={{color: 'white', textDecoration: 'none'}}>nirjaladeshar98@gmail.com</a></p>
            <p>📞 <a href="tel:+9779761831697" style={{color: 'white', textDecoration: 'none'}}>+977-9761831697</a></p>
            <p>📍 Kathmandu, Nepal</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nirjala Deshar. All rights reserved.</p>
          <p>Designed with 💜 by Nirjala Deshar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
