import React from 'react'
import './soc-list.scss';

import { SocListMocks } from '../../mocks/soc-list';

export const SocList = () => {
  return (
    <ul className="soc-list">
      {
        SocListMocks.map(({ icon, width, height, alt }, index) => {
          return <li key={index} className="soc-list">
            <a href="#">
              <img src={icon} width={width} height={height} alt={alt} loading="lazy" />
            </a>
          </li>
        })
      }
    </ul>
  )
};