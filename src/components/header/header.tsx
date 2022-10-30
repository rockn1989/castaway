import React, { useRef } from 'react'
import './header.scss';

const Header = () => {
  const mainNav = useRef<HTMLElement>(null);

  const mobileHandlerMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    mainNav.current?.classList.toggle('active');
  }

  return (
    <header className='page-header'>
      <div className='container'>
        <div className='page-header__inner'>
          <a href="/" className="logo">
            <img src="/images/logo.svg" />
          </a>

          <nav className="main-nav" ref={mainNav}>
            <ul className="main-nav__list">
              <li><a href="#" className='active'>Home</a></li>
              <li><a href="#">Episodes</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <a href="#" className="mobile-button-menu hidden-md" onClick={mobileHandlerMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="3 6 18 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M21 7H3V6H21V7ZM21 12.5H3V11.5H21V12.5ZM3 18H21V17H3V18Z" fill="currentColor" />
            </svg>

          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;