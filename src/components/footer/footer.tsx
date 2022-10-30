import React from 'react'
import MusicList from '../music-list/music-list';
import SocList from '../soc-list/soc-list';
import './footer.scss';

const Footer = () => {
  return (
    <footer className='page-footer'>
      <div className="container">
        <div className="page-footer__inner">
          <div className="left-column">
            <a href="/" className="logo">
              <img src="/images/logo.svg" width="222" height="45" alt="castaway" />
            </a>
            <SocList />
          </div>
          <div className="middle-column">
            <ul className="footer-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Episodes</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            <ul className="footer-nav">
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Instructions</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Credit</a></li>
              <li><a href="#">Powered by Webflow</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
          <div className="right-column">
            <MusicList />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer