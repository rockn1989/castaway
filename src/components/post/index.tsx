import React from 'react'
import './post.scss';

type PostProps = {
  title: string,
  previewImg: string,
  tags: string[],
  episode: number,
  text: string,
};

export const Post: React.FC<PostProps> = ({ title, previewImg, tags, episode, text }) => {
  return (
    <article className="post">
      <div className="post__img">
        <img src={previewImg} alt={title} width="389" height="465" loading="lazy" />
      </div>
      <div className="post__desc">
        <div className="post__tags">
          {
            tags.map((tag, index) => {
              return <span key={index}>{tag}</span>
            })
          }
        </div>

        <div className="post__episode">
          <a href="#">Episode {episode}</a>
        </div>
        <div className="post__title">
          <h2>{title}</h2>
        </div>
        <div className="post__text">
          <p>{text}</p>
        </div>

        <a href="#" className="button" role="buttons">View Episode Details</a>
      </div>
    </article>
  )
};