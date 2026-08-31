import React from 'react';
import '../../Hero/style.css';

export default function Hero() {
  return (
    <>
      <section id="hero" className="section-container">
            <div className="hero-bg">
                <img src="/assets/images/hero/Hero.webp" alt="Children playing in classroom" />
                <div className="hero-overlay"></div>
            </div>


            <div className="hero-content">
                <div className="hero-badge-pill">
                    <span className="badge-dot"></span>
                    <span>ADMISSIONS OPEN FOR 2026-27</span>
                </div>
                <h1 className="hero-title">Where Little Moments<br /><span className="hero-title-highlight">Become Big Beginnings.</span></h1>

                <div className="hero-card">
                    <div className="hero-card-inner">
                        <div className="hero-card-text">
                            <p className="hero-card-tagline">Nurturing curiosity, confidence & creativity</p>
                            <p className="hero-card-desc">From playgroup to kindergarten, we provide a warm, holistic environment where every child blossoms into a joyful lifelong learner.</p>
                        </div>
                        <div className="hero-card-image">
                            <img src="/assets/images/Homepage/child.jpg" alt="Child learning and playing joyfully" />
                        </div>
                    </div>
                    <div className="hero-card-actions">
                        <a href="#campus-finder" className="btn-hero-primary">Find a Campus</a>
                        <a href="#book-visit" className="btn-hero-outline">Book a Tour</a>
                    </div>
                </div>
            </div>

            <div className="hero-stats-wrapper">
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-icon">🏆</span>
                        <div className="stat-text">
                            <strong>20+ Years</strong>
                            <span>of educational excellence</span>
                        </div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-icon">🏫</span>
                        <div className="stat-text">
                            <strong>Multiple Campuses</strong>
                            <span>across Hyderabad</span>
                        </div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-icon">💛</span>
                        <div className="stat-text">
                            <strong>Trusted Families</strong>
                            <span>thousands and growing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
