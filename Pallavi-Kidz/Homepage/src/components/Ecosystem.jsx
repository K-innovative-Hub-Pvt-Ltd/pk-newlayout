import React, { useEffect, useRef } from 'react';
import '../../Ecosystem/style.css';

export default function Ecosystem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ecoSection = sectionRef.current;
    if (!ecoSection) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = ecoSection.querySelectorAll('.eco-milestone-item, .eco-closing-statement');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(item => item.classList.add('eco-revealed'));
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
    };

    const itemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('eco-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealItems.forEach(item => itemObserver.observe(item));

    return () => {
      revealItems.forEach(item => itemObserver.unobserve(item));
    };
  }, []);

  return (
    <>
      <section id="ecosystem-journey" aria-label="Educational Ecosystem Journey" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Subtle Background Doodles */}
            <svg className="doodle doodle-leaf" viewBox="0 0 24 24" width="70" height="70" stroke="#2b9348" strokeWidth="1.5" fill="none" style={{ position: 'absolute', top: '15%', left: '45%', opacity: 0.1, transform: 'rotate(20deg)' }}>
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
            <svg className="doodle doodle-book" viewBox="0 0 24 24" width="60" height="60" stroke="#0077b6" strokeWidth="1.5" fill="none" style={{ position: 'absolute', bottom: '20%', right: '5%', opacity: 0.1, transform: 'rotate(-15deg)' }}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <svg className="doodle doodle-sparkle" viewBox="0 0 24 24" width="50" height="50" stroke="#f4a261" strokeWidth="1.5" fill="none" style={{ position: 'absolute', top: '10%', right: '15%', opacity: 0.15, transform: 'rotate(45deg)' }}>
                <polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10 12 2"></polygon>
            </svg>

            <div className="eco-inner" style={{ position: 'relative', zIndex: 2 }}>

                {/* LEFT: Header */}
                <div className="eco-left">
                    <div className="eco-pill-badge">
                        <span className="eco-pill-num">03</span>
                        <span className="eco-pill-text">A BIGGER EDUCATIONAL ECOSYSTEM</span>
                    </div>
                    <h2 className="eco-heading">
                        A journey that<br />
                        <span className="eco-heading-green">grows with<br />them.</span>
                    </h2>
                    <p className="eco-subtext">From their first little discoveries to the bigger dreams ahead, Pallavi is
                        part of an educational ecosystem built around growing minds.</p>
                </div>

                {/* RIGHT: Three staggered cards */}
                <div className="eco-right">

                    {/* CARD 01: PALLAVI KIDZ */}
                    <div className="eco-card eco-card-1">
                        <div className="eco-card-inner eco-card-cream">
                            <span className="eco-card-num">01</span>
                            <div className="eco-card-photo-wrap">
                                <img src="/assets/images/Ecosystem/asr_new.webp" alt="Pallavi Kidz AS Rao Nagar" className="eco-card-photo" />
                            </div>
                        </div>
                        <div className="eco-card-meta">
                            <span className="eco-card-label" style={{color:'#E4007D'}}>EARLY YEARS</span>
                            <h3 className="eco-card-title">Pallavi Kidz</h3>
                            <p className="eco-card-desc">Where little moments become big beginnings.</p>
                        </div>
                    </div>

                    {/* CARD 02: PALLAVI GROUP OF SCHOOLS */}
                    <div className="eco-card eco-card-2">
                        <div className="eco-card-inner eco-card-blue">
                            <span className="eco-card-num">02</span>
                            <div className="eco-card-photo-wrap">
                                <img src="/assets/images/Ecosystem/PGOS2.webp" alt="Pallavi Group of Schools" className="eco-card-photo" />
                            </div>
                        </div>
                        <div className="eco-card-meta">
                            <span className="eco-card-label" style={{color:'#009DE2'}}>K-12 EDUCATION</span>
                            <h3 className="eco-card-title">Pallavi Group of Schools</h3>
                            <p className="eco-card-desc">A continued journey of learning, growth and discovery.</p>
                        </div>
                    </div>

                    {/* CARD 03: PALLAVI ENGINEERING COLLEGE */}
                    <div className="eco-card eco-card-3">
                        <div className="eco-card-inner eco-card-green">
                            <span className="eco-card-num">03</span>
                            <div className="eco-card-photo-wrap">
                                <img src="/assets/images/Ecosystem/PEC.webp" alt="Pallavi Engineering College" className="eco-card-photo" />
                            </div>
                        </div>
                        <div className="eco-card-meta">
                            <span className="eco-card-label" style={{color:'#2F9E44'}}>HIGHER EDUCATION</span>
                            <h3 className="eco-card-title">Pallavi Engineering College</h3>
                            <p className="eco-card-desc">A pathway toward advanced learning, innovation and future
                                possibilities.</p>
                        </div>
                    </div>

                </div>{/* /eco-right */}
            </div>{/* /eco-inner */}
        </section>
    </>
  );
}
