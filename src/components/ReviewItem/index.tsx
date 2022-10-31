import React from 'react'
import './review.scss';

type ReviewItemProps = {
  text: string,
  author: string
};

export const ReviewItem: React.FC<ReviewItemProps> = ({ text, author }) => {
  return (
    <div className="review">
      <div className="review__rating" />
      <div className="review__text">{text}</div>
      <div className="review__author">{author}</div>
    </div>
  )
};