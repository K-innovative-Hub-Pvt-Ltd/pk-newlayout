import React from 'react';
import '../../styles/CampusExperience.css';

export default function CampusExperience() {
  return (
    <>
      <section id="campus-experience" className="section-container">
            <div className="campus-bg"></div>
            
            <div className="campus-experience-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#2F2482', fontWeight: 800, marginBottom: '0.5rem' }}>A Space Designed for Joy</h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Where every corner sparks curiosity and imagination.</p>
            </div>

            <div className="campus-collage">
                {/* Background Decoratives */}
                <svg className="deco deco-1" viewBox="0 0 24 24" width="32" height="32" stroke="#a3b18a" stroke-width="2"
                    fill="none">
                    <path d="M12 22C12 22 20 16 20 10C20 6 16 2 12 2C8 2 4 6 4 10C4 16 12 22 12 22Z"></path>
                    <path d="M12 22V10"></path>
                </svg>
                <svg className="deco deco-2" viewBox="0 0 24 24" width="24" height="24" stroke="#a3b18a" stroke-width="2"
                    fill="none">
                    <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9Z"></path>
                </svg>
                <svg className="deco deco-3" viewBox="0 0 24 24" width="28" height="28" stroke="#a3b18a" stroke-width="2"
                    fill="none">
                    <path d="M12 22C12 22 20 16 20 10C20 6 16 2 12 2C8 2 4 6 4 10C4 16 12 22 12 22Z"></path>
                    <path d="M12 22V10"></path>
                </svg>

                {/* Col 1 */}
                <div className="campus-col col-learn">
                    <div className="campus-img-wrap img-learn">
                        <img src="/assets/images/Homepage/campus1.jpg" alt="Learn" />
                        <div className="campus-tag tag-bottom-right">LEARN</div>
                    </div>
                </div>

                {/* Col 2 */}
                <div className="campus-col col-play">
                    <div className="campus-img-wrap img-play">
                        <img src="/assets/images/Homepage/campus2.jpg" alt="Play" />
                        <div className="campus-tag tag-top-right">PLAY</div>
                    </div>
                </div>

                {/* Col 3 Stacked */}
                <div className="campus-col col-stacked">
                    <div className="campus-img-wrap img-create">
                        <img src="/assets/images/Homepage/campus3.jpg" alt="Create" />
                        <div className="campus-tag tag-bottom-right" style={{}}>CREATE</div>
                    </div>
                    <div className="campus-img-wrap img-discover">
                        <img src="/assets/images/Homepage/campus4.jpg" alt="Discover" />
                        <div className="campus-tag tag-top-right">DISCOVER</div>
                    </div>
                </div>

                {/* Col 4 */}
                <div className="campus-col col-move">
                    <div className="campus-img-wrap img-move">
                        <img src="/assets/images/Homepage/campus5.jpg" alt="Move" />
                        <div className="campus-tag tag-bottom-right">MOVE</div>
                    </div>
                </div>

                {/* Col 5 */}
                <div className="campus-col col-safe">
                    <div className="campus-img-wrap img-safe">
                        <img src="/assets/images/Homepage/campus6.jpg" alt="Feel Safe" />
                        <div className="campus-tag tag-bottom-right">FEEL SAFE</div>
                    </div>
                </div>

            </div>
        </section>
    </>
  );
}
