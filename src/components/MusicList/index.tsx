import React from 'react'
import './music-list.scss';
import { MusicMocks } from '../../mocks/music-list';

export const MusicList = () => {

  return (
    <ul className="music-list">{
      MusicMocks.map(({ icon, width, height, alt }, index) => {
        return <li key={index}>
          <a href="#">
            <img src={icon} width={width} height={height} alt={alt} loading="lazy" />
          </a>
        </li>
      })
    }</ul>
  )
};