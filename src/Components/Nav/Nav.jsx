import React from 'react';
import './Nav.css';
import logo from './../../assets/logo.png';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <img className='turbo-logo' src={logo} alt='logo' />
        <p className='turbo-logo-text'>turboType</p>
      </div>
      <div className='nav-right'>
        <a
          target='_blank'
          className='nav-link'
          href='https://github.com/mittalaakash'
          rel='noreferrer'
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Nav;
