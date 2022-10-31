import React from 'react'
import './music-list.scss'

//Тут лучше вынести картинки в мок и заюзать его в ul
// Что-то типа const MockIcons = ['', '', ...]

const MusicList = () => {
  return (
    <ul className="music-list">
      <li>
        <a href="#">
          <img
            src="/images/icon-svg/music-icon-1.svg"
            alt=""
            width="32"
            height="32"
            loading="lazy"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src="/images/icon-svg/music-icon-2.svg"
            alt=""
            width="32"
            height="32"
            loading="lazy"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src="/images/icon-svg/music-icon-3.svg"
            alt=""
            width="32"
            height="32"
            loading="lazy"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src="/images/icon-svg/music-icon-4.svg"
            alt=""
            width="32"
            height="32"
            loading="lazy"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src="/images/icon-svg/music-icon-5.svg"
            alt=""
            width="32"
            height="32"
            loading="lazy"
          />
        </a>
      </li>
    </ul>
  )
}

export default MusicList
