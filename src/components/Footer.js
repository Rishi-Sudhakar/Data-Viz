import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo hover-scale">DataViz</div>
        <div className="footer-links">
          <a href="#" className="hover-scale">Privacy Policy</a>
          <a href="#" className="hover-scale">Terms of Service</a>
          <a href="#" className="hover-scale">Contact Us</a>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon hover-rotate">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon hover-rotate">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="social-icon hover-rotate">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 DataViz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;