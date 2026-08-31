import React from 'react';
import '../../Why-Pallavi/style.css';

export default function WhyPallavi() {
  return (
    <>
      <section id="why-pallavi" className="section-container">
            <div className="why-grid">

                {/* ROW 1 */}
                <div className="why-feature tl-feat">
                    <div className="feature-icon"><span className="icon-grow">🌱</span></div>
                    <div className="feature-text">
                        <h4 className="color-grow">GROW</h4>
                        <p>Nurturing minds<br />and hearts.</p>
                    </div>
                </div>

                <div className="why-img tl-img">
                    <img src="/assets/images/Homepage/why1.jpg" alt="Grow" className="blob-img" />
                    <svg className="arrow arrow-grow" viewBox="0 0 100 50">
                        <path d="M100,25 Q50,0 0,25" stroke="#2b9348" stroke-width="2" fill="none"
                            marker-end="url(#arrowhead-grow)" />
                    </svg>
                </div>

                <div className="why-center center">
                    <h2>More than a<br />preschool.</h2>
                    <h3>A place to<br />become.</h3>
                    <div className="heart-icon">
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="#d13264" stroke-width="2.5" fill="none">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                            </path>
                        </svg>
                    </div>
                </div>

                <div className="why-img tr-img">
                    <svg className="arrow arrow-explore" viewBox="0 0 100 50">
                        <path d="M0,25 Q50,0 100,25" stroke="#0077b6" stroke-width="2" fill="none"
                            marker-end="url(#arrowhead-explore)" />
                    </svg>
                    <img src="/assets/images/Homepage/why3.jpg" alt="Explore" className="blob-img" />
                </div>

                <div className="why-feature tr-feat">
                    <div className="feature-icon"><span className="icon-explore">🔍</span></div>
                    <div className="feature-text">
                        <h4 className="color-explore">EXPLORE</h4>
                        <p>Encouraging wonder<br />and discovery.</p>
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="why-feature bl-feat">
                    <div className="feature-icon"><span className="icon-create">🎨</span></div>
                    <div className="feature-text">
                        <h4 className="color-create">CREATE</h4>
                        <p>Inspiring imagination<br />and expression.</p>
                    </div>
                </div>

                <div className="why-img bl-img">
                    <img src="/assets/images/Homepage/why2.jpg" alt="Create" className="blob-img" />
                    <svg className="arrow arrow-create" viewBox="0 0 100 50">
                        <path d="M100,25 Q50,50 0,25" stroke="#f4a261" stroke-width="2" fill="none"
                            marker-end="url(#arrowhead-create)" />
                    </svg>
                </div>

                <div className="why-img br-img">
                    <svg className="arrow arrow-belong" viewBox="0 0 100 50">
                        <path d="M0,25 Q50,50 100,25" stroke="#d13264" stroke-width="2" fill="none"
                            marker-end="url(#arrowhead-belong)" />
                    </svg>
                    <img src="/assets/images/Homepage/why4.jpg" alt="Belong" className="blob-img" />
                </div>

                <div className="why-feature br-feat">
                    <div className="feature-icon"><span className="icon-belong">👥</span></div>
                    <div className="feature-text">
                        <h4 className="color-belong">BELONG</h4>
                        <p>Building confidence<br />and connections.</p>
                    </div>
                </div>

            </div>

            {/* SVG Definitions for Arrows */}
            <svg style={{}}>
                <defs>
                    <marker id="arrowhead-grow" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="10 0, 10 7, 0 3.5" fill="#2b9348" />
                    </marker>
                    <marker id="arrowhead-explore" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#0077b6" />
                    </marker>
                    <marker id="arrowhead-create" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="10 0, 10 7, 0 3.5" fill="#f4a261" />
                    </marker>
                    <marker id="arrowhead-belong" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#d13264" />
                    </marker>
                </defs>
            </svg>
        </section>
    </>
  );
}
