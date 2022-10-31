import React from 'react'
import { Post } from '../Post';
import { MockArticles } from '../../mocks/articles';
import './articles-list.scss';

export const ArticlesList = () => {

  return (
    <ul className="articles-list">{
      MockArticles.map((el, index) => {
        return (
          <li key={index} className="articles-list__item border-round">
            <Post {...el} />
          </li>
        );
      })
    }</ul>
  )
}