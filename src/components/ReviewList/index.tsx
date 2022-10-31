import React from 'react'
import './reviews-list.scss';
import { ReviewArticles } from '../../mocks/reviews';
import { ReviewItem } from '../ReviewItem';

export const ReviewsList = () => {

  return (
    <ul className="reviews-list">{
      ReviewArticles.map((el, index) => {
        return (
          <li key={index} className="reviews-list__item border-round">
            <ReviewItem {...el} />
          </li>
        );
      })
    }</ul>
  )
};