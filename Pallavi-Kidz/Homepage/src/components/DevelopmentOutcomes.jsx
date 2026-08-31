import React from 'react';
import '../../Development-Outcomes/style.css';

export default function DevelopmentOutcomes() {
  return (
    <>
        <section id="development-outcomes" className="section-container">
            <div className="outcomes-bg">
                <svg className="star-deco star-1" viewBox="0 0 24 24" width="32" height="32" stroke="#f4a261"
                    stroke-width="1.5" fill="none">
                    <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9Z"></path>
                </svg>
                <svg className="star-deco star-2" viewBox="0 0 24 24" width="24" height="24" stroke="#f4a261"
                    stroke-width="1.5" fill="none">
                    <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9Z"></path>
                </svg>
            </div>

            <div className="outcomes-content">
                <div className="outcomes-header">
                    <h2 className="outcomes-title">Growing<br/>every day</h2>
                </div>
                
                <div className="outcomes-pill-grid">
                    <div className="outcome-pill pill-blue">
                        <img src="/assets/images/Homepage/outcome1.jpg" alt="Curious child" />
                        <span>Curious</span>
                    </div>
                    <div className="outcome-pill pill-orange">
                        <img src="/assets/images/Homepage/outcome2.jpg" alt="Creative child" />
                        <span>Creative</span>
                    </div>
                    <div className="outcome-pill pill-green">
                        <img src="/assets/images/Homepage/outcome3.jpg" alt="Independent child" />
                        <span>Independent</span>
                    </div>
                    <div className="outcome-pill pill-yellow">
                        <img src="/assets/images/Homepage/outcome4.jpg" alt="Kind children" />
                        <span>Kind</span>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
