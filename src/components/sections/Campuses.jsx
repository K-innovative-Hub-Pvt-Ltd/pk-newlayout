import React from 'react';
import '../../styles/Campuses.css';

const Campuses = () => {
  const campusData = [
    { name: 'Alwal', image: '/assets/images/Ecosystem/asr_new.webp', phone: '#', email: '#', link: '#' },
    { name: 'Tarnaka', image: '/assets/images/Ecosystem/PGOS2.webp', phone: '#', email: '#', link: '#' },
    { name: 'Habsiguda', image: '/assets/images/Ecosystem/PEC.webp', phone: '#', email: '#', link: '#' },
    { name: 'AS Rao Nagar', image: '/assets/images/Ecosystem/asr_new.webp', phone: '#', email: '#', link: '#' }
  ];

  return (
    <section id="explore-campuses">
      {/* Decorative Background Elements */}
      <div className="campus-bg-decoration">
        {/* Placeholder for the curved road line */}
        <svg className="road-svg" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C320,200 420,0 720,100 C1020,200 1120,0 1440,100" stroke="#E6EBF5" strokeWidth="8" strokeDasharray="15 15" strokeLinecap="round" />
        </svg>
      </div>

      <div className="campuses-container">
        <div className="campuses-header">
          <div className="campuses-pill">Our Campuses</div>
          <h2 className="campuses-title">
            Explore <span className="text-accent">Our Campuses</span>
          </h2>
        </div>

        <div className="campuses-grid">
          {campusData.map((campus, index) => (
            <div className="campus-column" key={index}>
              <div className="campus-card">
                <img src={campus.image} alt={`${campus.name} Campus`} className="campus-img" />
                <div className="campus-overlay">
                  <h3 className="campus-name">{campus.name}</h3>
                </div>
              </div>
              
              <div className="campus-actions">
                <a href={campus.phone} className="action-btn icon-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
                <a href={campus.email} className="action-btn icon-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                <a href={campus.link} className="action-btn text-btn">View Campus</a>
              </div>
            </div>
          ))}
        </div>

        <div className="campuses-footer">
          <a href="#" className="btn-find-campus">Find a Campus Near You</a>
        </div>
      </div>
    </section>
  );
};

export default Campuses;
