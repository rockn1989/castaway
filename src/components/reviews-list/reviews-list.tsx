import React from 'react'
import './reviews-list.scss'
import reviewsMocks from '../../mocks/reviews'
import Review from '../review/review'

// const ReviewItem = () => {} и использовать просто li без мапа

const ReviewsList = () => {
  // Лучше это выносить в отдельный компонент, типа ReviewItem
  // вместо idx лучше писать index
  // И вместо el использовать деструктуризацию reviewsMocks.map(({title, desc, text}, idx) => {})
  const reviews = reviewsMocks.map((el, idx) => {
    return (
      <li key={idx} className="reviews-list__item border-round">
        <Review {...el} />
      </li>
    )
  })

  // А вот тут в ul уже использовать map
  return <ul className="reviews-list">{reviews}</ul>
}

export default ReviewsList
