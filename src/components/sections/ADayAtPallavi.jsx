import React from 'react';
import '../../styles/ADayAtPallavi.css';

export default function ADayAtPallavi() {
  return (
    <>
      <section id="a-day-at-pallavi" className="section-container">
            <div className="day-wrapper" style={{ position: 'relative' }}>
                {/* Subtle Background Doodles */}
                <svg className="doodle doodle-sun" viewBox="0 0 24 24" width="64" height="64" stroke="#f4a261" strokeWidth="1" fill="none" style={{ position: 'absolute', top: '-20px', left: '10%', opacity: 0.15, transform: 'rotate(15deg)' }}>
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg className="doodle doodle-star" viewBox="0 0 24 24" width="48" height="48" stroke="#2b9348" strokeWidth="1.5" fill="none" style={{ position: 'absolute', bottom: '10%', left: '5%', opacity: 0.12, transform: 'rotate(-20deg)' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg className="doodle doodle-cloud" viewBox="0 0 24 24" width="80" height="80" stroke="#0077b6" strokeWidth="1" fill="none" style={{ position: 'absolute', top: '30%', right: '5%', opacity: 0.1, transform: 'rotate(5deg)' }}>
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
                
                <div className="day-intro">
                    <h2>Every day<br />is an<br />adventure.</h2>
                    <div className="orange-scribble">
                        <svg className="scribble" viewBox="0 0 100 15" preserveAspectRatio="none">
                            <path d="M0,12 Q40,0 100,5 M5,15 Q50,8 90,12" stroke="#f4a261" stroke-width="2.5"
                                fill="none" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div className="day-schedule-grid">
                    <div className="schedule-line"></div>

                    {/* Row 1 */}
                    <div className="schedule-img left-img"><img src="/assets/images/Homepage/day1.jpg" alt="Welcome" /></div>
                    <div className="schedule-text left-text">
                        <h4><strong>09:00</strong> Welcome</h4>
                        <p>Warm hellos,<br />happy hearts.</p>
                    </div>
                    <div className="schedule-dot dot-green"></div>
                    <div className="schedule-text right-text">
                        <h4 className="text-blue"><strong>10:00</strong> Circle & Stories</h4>
                        <p className="text-blue">Sharing, listening<br />and connecting.</p>
                    </div>
                    <div className="schedule-img right-img"><img src="/assets/images/Homepage/day4.jpg" alt="Stories" /></div>

                    {/* Row 2 */}
                    <div className="schedule-img left-img"><img src="/assets/images/Homepage/day2.jpg" alt="Explore" /></div>
                    <div className="schedule-text left-text">
                        <h4><strong>11:00</strong> Explore</h4>
                        <p>Hands-on discovery,<br />curiosity at play.</p>
                    </div>
                    <div className="schedule-dot dot-orange"></div>
                    <div className="schedule-text right-text">
                        <h4 className="text-blue"><strong>12:00</strong> Create</h4>
                        <p className="text-blue">Ideas, colours<br />and expression.</p>
                    </div>
                    <div className="schedule-img right-img"><img src="/assets/images/Homepage/day5.jpg" alt="Create" /></div>

                    {/* Row 3 */}
                    <div className="schedule-img left-img"><img src="/assets/images/Homepage/day3.jpg" alt="Play" /></div>
                    <div className="schedule-text left-text">
                        <h4><strong>01:00</strong> Play</h4>
                        <p>Movement, joy<br />and friendships.</p>
                    </div>
                    <div className="schedule-dot dot-pink"></div>
                    <div className="schedule-text right-text">
                        <h4 className="text-blue"><strong>02:00</strong> Happy Goodbye</h4>
                        <p className="text-blue">Smiles to take<br />home.</p>
                    </div>
                    <div className="schedule-img right-img"><img src="/assets/images/Homepage/day6.jpg" alt="Goodbye" /></div>

                </div>
            </div>
        </section>
    </>
  );
}
