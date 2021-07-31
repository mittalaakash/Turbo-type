import React from 'react';
import './Landing.css';
import turbo from '../../assets/turbo.png';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='landing-left' data-aos='fade-right'>
        <h1 className='landing-header'>Can you type...</h1>
        <div className='typewriter-container'>
          <Typewriter
            options={{
              strings: ['Fast?', 'Correct?', 'Quick?'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='landing-right' data-aos='fade-left'>
        <img className='turbo-image' src={turbo} alt='Snail' />
      </div>
    </div>
  );
};
export default Landing;
