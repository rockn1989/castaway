import React from 'react'
import './reviews-list.scss';
import reviewsMocks from '../../mocks/reviews';
import Review from '../review/review';

const ReviewsList = () => {
  const reviews = reviewsMocks.map((el, idx) => {
    return (
      <li key={idx} className="reviews-list__item border-round">
        <Review {...el} />
      </li>
    );
  });

  return (
    <ul className="reviews-list">{reviews}</ul>
  )
}

export default ReviewsList;