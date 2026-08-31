import React from 'react';
import './Teachers.css';

export default function Teachers() {
  return (
    <>
        <section id="teachers" className="section-container">
            <div className="teachers-bg">
                <img src="/assets/images/Homepage/teacher_bg.jpg" alt="Teacher with students" />
                <div className="teachers-overlay"></div>
            </div>
            <div className="teachers-content">
                <div className="floating-word word-notice">
                    <span>Notice</span>
                </div>
                <div className="floating-word word-listen">
                    <span>Listen</span>
                    <svg className="arrow-listen" viewBox="0 0 50 20">
                        <path d="M0,10 Q25,0 45,10 M40,5 L45,10 L38,15" stroke="#fff" stroke-width="2" fill="none" />
                    </svg>
                </div>
                <div className="floating-word word-guide">
                    <span>Guide</span>
                    <svg className="line-guide" viewBox="0 0 40 5">
                        <path d="M0,2 Q20,5 40,2" stroke="#fff" stroke-width="2" fill="none" />
                    </svg>
                </div>
                <div className="floating-word word-encourage">
                    <span>Encourage</span>
                    <svg className="arrow-encourage" viewBox="0 0 30 20">
                        <path d="M0,5 Q15,15 25,10 M20,15 L25,10 L28,15" stroke="#fff" stroke-width="2" fill="none" />
                    </svg>
                </div>
            </div>
        </section>
    </>
  );
}
