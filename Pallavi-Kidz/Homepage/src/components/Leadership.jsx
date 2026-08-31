import React, { useState, useEffect } from 'react';
import '../../Leadership/style.css';

const teamData = [
  {
      name: 'M Komaraiah',
      role: 'Chairman of DPS and Pallavi Group',
      subtitle: 'Distinguished Educationist & Philanthropist',
      quote: '"Education is not merely the transmission of information; it is the ignition of character, intellectual courage, and timeless ethical conviction."',
      desc: 'At Pallavi International School, our vision has always been to construct an educational sanctuary that respects the deep spiritual and cultural roots of India while equipping our students with the cosmopolitan competencies required to thrive anywhere on the globe.',
      img: '/assets/images/team/komaraiah.webp'
  },
  {
      name: 'Yasasvi',
      role: 'Chief Operating Officer',
      subtitle: 'Strategic Operations',
      quote: '"Building world-class infrastructure to support world-class education."',
      desc: 'Ensuring our campuses provide the safest, most technologically advanced, and inspiring environments for students and educators alike. We strive for excellence in every operational aspect.',
      img: '/assets/images/team/yasasvi.webp'
  },
  {
      name: 'Pallavi',
      role: 'Director',
      subtitle: 'Visionary Leader',
      quote: '"Empowering the next generation through innovative learning methodologies and a nurturing environment."',
      desc: 'We believe that every child is unique and deserves an environment that fosters their individual talents and capabilities. Our focus is on holistic development and preparing students for the challenges of tomorrow.',
      img: '/assets/images/team/pallavi.webp'
  },
  {
      name: 'Bhuvana',
      role: 'Head of Early Years',
      subtitle: 'Early Childhood Expert',
      quote: '"The early years are the foundation of a lifetime of learning and discovery."',
      desc: 'We focus on play-based, experiential learning that builds strong cognitive, social, and emotional foundations in our youngest learners, sparking a lifelong love for knowledge.',
      img: '/assets/images/team/bhuvana.webp'
  },
  {
      name: 'Sudha',
      role: 'Principal',
      subtitle: 'Academic Excellence',
      quote: '"True learning happens when curiosity meets guidance in a safe, encouraging space."',
      desc: 'Our academic curriculum is designed to challenge students while providing the support they need to succeed and grow into responsible global citizens with strong moral foundations.',
      img: '/assets/images/team/sudha.webp'
  }
];

export default function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % teamData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const activeLeader = teamData[activeIndex];

  return (
    <>
      <section id="leadership" className="section-container">
            <div className="leadership-wrapper">
                <div className="leadership-header">
                    <span className="eyebrow">ACADEMIC LEADERSHIP</span>
                    <h2>Guided by Vision, <span className="italic-serif">Scholarly Rigor</span><br />&amp; Integrity.</h2>
                </div>

                <div className="leadership-content">
                    <div className="leader-image">
                        <img src={activeLeader.img} alt={activeLeader.name} />
                    </div>

                    <div className="leader-info">
                        <h3>{activeLeader.name}</h3>
                        <h4>{activeLeader.role}</h4>
                        <p className="leader-subtitle">{activeLeader.subtitle}</p>

                        <blockquote className="leader-quote">
                            {activeLeader.quote}
                        </blockquote>

                        <p className="leader-desc">
                            {activeLeader.desc}
                        </p>

                        <a href="#" className="linkedin-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2"
                                fill="none">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                </path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            View LinkedIn Profile
                        </a>
                    </div>
                </div>

                <div className="team-thumbnails" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {teamData.map((leader, index) => (
                      <div 
                        key={index}
                        className={`thumb ${index === activeIndex ? 'active' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                      >
                          <img src={leader.img} alt={leader.name} />
                      </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}
