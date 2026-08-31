import React from 'react';
import '../../Parent-Stories/style.css';

const testimonials = [
  {
    quote: "Pallavi Kidz has been the best beginning for my daughter. The teachers are so caring, and her confidence and communication skills have blossomed tremendously!",
    parent: "Priya & Rajesh Sharma",
    child: "Parents of Ananya (Nursery)",
    campus: "AS Rao Nagar Campus",
    rating: 5,
  },
  {
    quote: "The activity-based learning approach makes coming to school a joy every single day. My son loves his teachers and the smart learning environment.",
    parent: "Dr. K. Srinivas Rao",
    child: "Parent of Vivaan (PP1)",
    campus: "Alwal Campus",
    rating: 5,
  },
  {
    quote: "Safe, nurturing, and incredibly attentive. We could not have asked for a better foundation before transitioning into formal schooling.",
    parent: "Meera & Vikram Reddy",
    child: "Parents of Advait (Playgroup)",
    campus: "Tarnaka Campus",
    rating: 5,
  }
];

export default function ParentStories() {
  return (
    <section id="parent-stories" className="parent-stories-section">
      <div className="parent-stories-container">
        <div className="stories-header">
          <div className="stories-badge-pill">HEARTFELT EXPERIENCES</div>
          <h2 className="stories-title">
            Loved by Parents, <span className="stories-title-highlight">Cherished by Kids</span>
          </h2>
          <p className="stories-subtitle">
            Hear from families who have entrusted their little ones to the nurturing world of Pallavi Kidz.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="stars-row">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="star-icon">★</span>
                ))}
              </div>
              <p className="testimonial-quote">"{item.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.parent.charAt(0)}
                </div>
                <div className="author-info">
                  <strong className="author-name">{item.parent}</strong>
                  <span className="author-child">{item.child}</span>
                  <span className="author-campus">{item.campus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
