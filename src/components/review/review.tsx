import React from 'react'
import './review.scss';

type ReviewProps = {
  text: string,
  author: string
};

const Review: React.FC<ReviewProps> = ({ text, author }) => {
  return (
    <div className="review">
      <div className="review__rating"></div>
      <div className="review__text">{text}</div>
      <div className="review__author">{author}</div>
    </div>
  )
}

export default Review;