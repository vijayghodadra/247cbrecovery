import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    name: 'James Thornton',
    location: 'Cambridge, UK',
    rating: 5,
    review: 'Absolutely incredible service! My car broke down on the A14 at 2am and they were with me in 20 minutes. The driver was professional, calm and got my car home safely. Cannot recommend enough!',
    date: '2 days ago',
    initials: 'JT',
    color: '#3b82f6',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    location: 'Ely, Cambridgeshire',
    rating: 5,
    review: 'Had an accident on the M11 and was terrified. Cambridge Vehicle Recovery were brilliant — they handled everything including liaising with the insurance company. True professionals.',
    date: '1 week ago',
    initials: 'SM',
    color: '#8b5cf6',
  },
  {
    id: 3,
    name: 'David Okafor',
    location: 'Peterborough, UK',
    rating: 5,
    review: 'Flat tyre on a rainy Sunday morning — they came out, had the right tyre, and were done in 30 minutes. Friendly, fast, and very fairly priced. My go-to recovery service from now on.',
    date: '3 weeks ago',
    initials: 'DO',
    color: '#10b981',
  },
  {
    id: 4,
    name: 'Emma Lawson',
    location: 'Huntingdon, UK',
    rating: 5,
    review: 'Used them twice now and both times the response was exceptional. Battery died in a car park and they had me jump started within 25 minutes. Great value for money.',
    date: '1 month ago',
    initials: 'EL',
    color: '#f59e0b',
  },
  {
    id: 5,
    name: 'Michael Fraser',
    location: 'Newmarket, UK',
    rating: 5,
    review: 'The driver went above and beyond, even helping me find a local garage at 11pm. This is what genuine customer service looks like. Five stars all the way!',
    date: '1 month ago',
    initials: 'MF',
    color: '#ef4444',
  },
  {
    id: 6,
    name: 'Priya Sharma',
    location: 'Cambridge, UK',
    rating: 5,
    review: 'Fast, professional, and incredibly reassuring when you\'re stranded. They kept me updated every step of the way. Absolutely the best recovery service in Cambridge.',
    date: '2 months ago',
    initials: 'PS',
    color: '#ec4899',
  },
];

const StarRating = ({ rating }) => (
  <div className="star-row">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={i < rating ? '#f59e0b' : 'none'} color={i < rating ? '#f59e0b' : '#cbd5e1'} />
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label-light">CUSTOMER FEEDBACK</p>
          <h2 className="section-title-light">What Our Customers Say</h2>
          <p className="section-subtitle-light">
            Over 9,000 satisfied customers across Cambridge and the UK. Read their genuine experiences.
          </p>
          <div className="overall-rating">
            <StarRating rating={5} />
            <span className="rating-score">4.9/5</span>
            <span className="rating-source">based on 400+ Google Reviews</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <Quote size={24} className="review-quote-icon" />
              <p className="review-text">{review.review}</p>
              <StarRating rating={review.rating} />
              <div className="reviewer-info">
                <div className="reviewer-avatar" style={{ backgroundColor: review.color }}>
                  {review.initials}
                </div>
                <div>
                  <p className="reviewer-name">{review.name}</p>
                  <p className="reviewer-location">{review.location} · {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
