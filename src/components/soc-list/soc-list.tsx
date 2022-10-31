import React from 'react'
import './soc-list.scss'

// Лучше вынести в мок
const SocList = () => {
  return (
    <ul className="soc-list">
      <li className="soc-list">
        <a href="#">
          <img
            src="/images/icon-svg/inst.svg"
            width="20"
            height="20"
            alt="inst"
            loading="lazy"
          />
        </a>
      </li>
      <li className="soc-list">
        <a href="#">
          <img
            src="/images/icon-svg/fb.svg"
            width="20"
            height="20"
            alt="fb"
            loading="lazy"
          />
        </a>
      </li>
      <li className="soc-list">
        <a href="#">
          <img
            src="/images/icon-svg/tw.svg"
            width="20"
            height="20"
            alt="tw"
            loading="lazy"
          />
        </a>
      </li>
    </ul>
  )
}

export default SocList
