import React from 'react';
import './Nav.css';
import logo from '../../assets/turbo-logo.png';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <img src={logo} alt='logo' className='turbo-logo' />
        <p className='turbo-logo-text'>TurboType</p>
      </div>
      <div className='nav-right'>
        <a
          target='_blank'
          rel='noreferrer'
          className='nav-link'
          href='https://github.com/mittalaakash'
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Nav;
