import React from 'react'
import Post from '../post/post'
import './articles-list.scss'
import articlesMocks from '../../mocks/articles'

const ArticlesList = () => {
  // Такие же рекомендации, как и в Reviews

  const articles = articlesMocks.map((el, idx) => {
    return (
      <li key={idx} className="articles-list__item border-round">
        <Post {...el} />
      </li>
    )
  })
  return <ul className="articles-list">{articles}</ul>
}

export default ArticlesList
