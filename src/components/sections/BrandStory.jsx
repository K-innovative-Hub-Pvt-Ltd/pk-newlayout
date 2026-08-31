import React from 'react';
import './BrandStory.css';

export default function BrandStory() {
  return (
    <>
      <section id="brand-story" className="section-container" style={{ position: 'relative' }}>
            {/* Contextual Doodles */}
            <svg className="doodle doodle-magnify" viewBox="0 0 24 24" width="70" height="70" stroke="#2b9348" strokeWidth="1.5" fill="none" style={{ position: 'absolute', top: '15%', left: '8%', opacity: 0.1, transform: 'rotate(-10deg)' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg className="doodle doodle-smile" viewBox="0 0 24 24" width="80" height="80" stroke="#0077b6" strokeWidth="1.5" fill="none" style={{ position: 'absolute', bottom: '15%', left: '25%', opacity: 0.08, transform: 'rotate(15deg)' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <svg className="doodle doodle-palette" viewBox="0 0 24 24" width="75" height="75" stroke="#f4a261" strokeWidth="1.5" fill="none" style={{ position: 'absolute', top: '25%', right: '10%', opacity: 0.12, transform: 'rotate(-25deg)' }}>
                <circle cx="13.5" cy="6.5" r=".5"></circle>
                <circle cx="17.5" cy="10.5" r=".5"></circle>
                <circle cx="8.5" cy="7.5" r=".5"></circle>
                <circle cx="6.5" cy="12.5" r=".5"></circle>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
            </svg>

            <div className="story-grid" style={{ position: 'relative', zIndex: 2 }}>

                {/* Column 1 */}
                <div className="story-col col-title">
                    <h2 className="story-main-title">Every child<br />begins with<br />curiosity.</h2>
                    <div className="green-underline"></div>
                </div>

                {/* Column 2 */}
                <div className="story-col col-why">
                    <div className="text-block text-why">
                        <h3>A why?</h3>
                        <div className="green-underline-thin"></div>
                    </div>
                    <div className="img-wrapper img-1-wrap">
                        <img src="/assets/images/Homepage/story1.jpg" alt="Boy thinking" className="blob-img img-1" />
                    </div>
                    <div className="text-block text-story">
                        <p>A story told<br />for the<br />tenth time.</p>
                        <div className="pink-underline"></div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="story-col col-center">
                    <div className="img-wrapper img-center-wrap">
                        <img src="/assets/images/Homepage/story2.jpg" alt="Teacher and girl" className="blob-img img-main" />
                        <img src="/assets/images/Homepage/story3.jpg" alt="Kids planting" className="blob-img img-inset" />
                    </div>
                </div>

                {/* Column 4 */}
                <div className="story-col col-friend">
                    <div className="text-block text-friend">
                        <h3>A new<br />friendship.</h3>
                        <div className="blue-underline"></div>
                    </div>
                    <div className="text-block text-step">
                        <p>A first step<br />taken with<br />confidence.</p>
                        <div className="green-underline-thin"></div>
                    </div>
                </div>

                {/* Column 5 */}
                <div className="story-col col-messy">
                    <div className="text-block text-messy">
                        <h3>A messy<br />painting.</h3>
                        <div className="orange-underline"></div>
                    </div>
                    <div className="img-wrapper img-4-wrap">
                        <img src="/assets/images/Homepage/story4.jpg" alt="Boy painting" className="blob-img img-4" />
                    </div>
                </div>

            </div>
        </section>
    </>
  );
}
