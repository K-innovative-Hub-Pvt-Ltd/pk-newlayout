import React from 'react';
import '../../Learning-Journey/style.css';

export default function LearningJourney() {
  return (
    <>
      <section id="learning-journey" className="section-container">
            <div className="journey-bg"></div>
            <div className="journey-wrapper">
                <div className="journey-intro">
                    <h2>A journey <br />of learning, <br />love and <br />possibilities.</h2>
                    <div className="underline-wrap">
                        <svg className="scribble" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0,5 Q50,0 100,5" stroke="#7ab4e1" stroke-width="4" fill="none"
                                stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div className="journey-timeline">
                    {/* Master animated wave path */}
                    <svg className="animated-journey-path" viewBox="0 0 1000 200" preserveAspectRatio="none">
                        {/* Curved dashed line passing through the centers of the staggered circles */}
                        <path
                            d="M 0 140 C 125 140, 125 40, 250 40 C 375 40, 375 140, 500 140 C 625 140, 625 40, 750 40 C 875 40, 875 140, 1000 140"
                            fill="none" stroke="#2b9348" stroke-width="3" stroke-dasharray="10,10"
                            vector-effect="non-scaling-stroke" stroke-linecap="round" />
                    </svg>

                    <div className="journey-step staggered-down">
                        <div className="step-img-wrap"><img src="/assets/images/Homepage/journey1.jpg" alt="Playgroup" />
                        </div>
                        <h4 className="step-title color-orange">PLAYGROUP</h4>
                        <span className="step-age-tag">1.5 - 2.5 Yrs</span>
                        <h5 className="step-subtitle">Discover</h5>
                        <p className="step-desc">I explore the world<br />with wonder.</p>
                    </div>

                    <div className="journey-step staggered-up">
                        <div className="step-img-wrap"><img src="/assets/images/Homepage/journey2.jpg" alt="Nursery" /></div>
                        <h4 className="step-title color-green">NURSERY</h4>
                        <span className="step-age-tag">2.5 - 3.5 Yrs</span>
                        <h5 className="step-subtitle">Explore</h5>
                        <p className="step-desc">I ask questions<br />and try new things.</p>
                    </div>

                    <div className="journey-step staggered-down">
                        <div className="step-img-wrap"><img src="/assets/images/Homepage/journey3.jpg" alt="PP1" /></div>
                        <h4 className="step-title color-blue">PP1 (LKG)</h4>
                        <span className="step-age-tag">3.5 - 4.5 Yrs</span>
                        <h5 className="step-subtitle">Express</h5>
                        <p className="step-desc">I share my ideas<br />in many ways.</p>
                    </div>

                    <div className="journey-step staggered-up">
                        <div className="step-img-wrap"><img src="/assets/images/Homepage/journey4.jpg" alt="PP2" /></div>
                        <h4 className="step-title color-pink">PP2 (UKG)</h4>
                        <span className="step-age-tag">4.5 - 5.5 Yrs</span>
                        <h5 className="step-subtitle">Connect</h5>
                        <p className="step-desc">I build friendships<br />and understand more.</p>
                    </div>

                    <div className="journey-step staggered-down">
                        <div className="step-img-wrap"><img src="/assets/images/Homepage/journey5.jpg" alt="Grade 1" /></div>
                        <h4 className="step-title color-purple">PRIMARY</h4>
                        <span className="step-age-tag">Grade 1 & Beyond</span>
                        <h5 className="step-subtitle">Excel</h5>
                        <p className="step-desc">I think deeper<br />and learn beyond.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
