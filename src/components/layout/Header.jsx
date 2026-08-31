import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="header" className="pk-header-sticky">
      <div className="navbar-content">
        <div className="logo-container">
          <a href="#" aria-label="Pallavi Kidz Home">
            <img src="/assets/images/Logos/pallavi-kidz-logo.webp" alt="Pallavi Kidz Logo" className="main-logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#brand-story" className="nav-link-item active">Our Story</a>
          <a href="#learning-journey" className="nav-link-item">Programs</a>
          <a href="#why-pallavi" className="nav-link-item">Why Pallavi</a>
          <a href="#a-day-at-pallavi" className="nav-link-item">Life at Kidz</a>
          <a href="#explore-campuses" className="nav-link-item">Campuses</a>
          <a href="#ecosystem-journey" className="nav-link-item">Ecosystem</a>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a href="#book-visit" className="btn-header-outline">Book a Visit</a>
          <a href="#campus-finder" className="btn-header-primary">Enquire Now</a>
          
          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a href="#brand-story" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
          <a href="#learning-journey" onClick={() => setMobileMenuOpen(false)}>Programs</a>
          <a href="#why-pallavi" onClick={() => setMobileMenuOpen(false)}>Why Pallavi</a>
          <a href="#a-day-at-pallavi" onClick={() => setMobileMenuOpen(false)}>Life at Kidz</a>
          <a href="#explore-campuses" onClick={() => setMobileMenuOpen(false)}>Campuses</a>
          <a href="#ecosystem-journey" onClick={() => setMobileMenuOpen(false)}>Ecosystem</a>
          <div className="mobile-drawer-actions">
            <a href="#book-visit" className="btn-header-outline" onClick={() => setMobileMenuOpen(false)}>Book a Visit</a>
            <a href="#campus-finder" className="btn-header-primary" onClick={() => setMobileMenuOpen(false)}>Enquire Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
