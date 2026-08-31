import React from 'react';
import '../../Footer/style.css';

export default function Footer() {
  return (
    <footer id="footer" className="pk-footer">
      <div className="footer-top-accent-bar"></div>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col footer-col-brand">
            <img src="/assets/images/Logos/pallavi-kidz-logo.webp" alt="Pallavi Kidz Logo" className="footer-brand-logo" />
            <p className="footer-brand-desc">
              Part of the prestigious Pallavi Educational Group. Empowering young minds with joy, values, and holistic early learning since decades.
            </p>
            <div className="footer-badge-trust">
              <span>★ 20+ Years of Educational Excellence</span>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Programs</h4>
            <ul className="footer-links-list">
              <li><a href="#learning-journey">Playgroup (1.5 - 2.5 yrs)</a></li>
              <li><a href="#learning-journey">Nursery (2.5 - 3.5 yrs)</a></li>
              <li><a href="#learning-journey">PP1 - LKG (3.5 - 4.5 yrs)</a></li>
              <li><a href="#learning-journey">PP2 - UKG (4.5 - 5.5 yrs)</a></li>
              <li><a href="#learning-journey">Day Care & Activity Center</a></li>
            </ul>
          </div>

          {/* Col 3: Campuses */}
          <div className="footer-col">
            <h4 className="footer-col-title">Key Campuses</h4>
            <ul className="footer-links-list">
              <li><a href="#explore-campuses">AS Rao Nagar Campus</a></li>
              <li><a href="#explore-campuses">Alwal Campus</a></li>
              <li><a href="#explore-campuses">Tarnaka Campus</a></li>
              <li><a href="#explore-campuses">Habsiguda Campus</a></li>
              <li><a href="#campus-finder">Find All Locations ↗</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Head Office */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <div className="footer-contact-info">
              <p className="contact-item"><strong>Head Office:</strong> 9-1-51/5, Arevalli Enclave, Bowenpally, Secunderabad, 500009.</p>
              <p className="contact-item"><strong>Admissions:</strong> +91 9100 000 000</p>
              <p className="contact-item"><strong>Email:</strong> admissions@pallavikidz.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">&copy; {new Date().getFullYear()} Pallavi Kidz. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms & Conditions</a>
            <span>•</span>
            <a href="#">Franchise Enquiry</a>
          </div>
        </div>
      </div>

      <a href="#header" className="scroll-top-btn" aria-label="Back to top">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </a>
    </footer>
  );
}
