import React from 'react'
import { Post } from '../Post';
import { MockArticles } from '../../mocks/articles';
import './articles-list.scss';

export const ArticlesList = () => {

  return (
    <ul className="articles-list">{
      MockArticles.map(({ title, previewImg, tags, episode, text }, index) => {
        return (
          <li key={index} className="articles-list__item border-round">
            <Post
              title={title}
              previewImg={previewImg}
              tags={tags}
              episode={episode}
              text={text} />
          </li>
        );
      })
    }</ul>
  )
}