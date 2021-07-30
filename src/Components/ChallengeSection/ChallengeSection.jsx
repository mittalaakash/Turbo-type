import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

const ChallengeSection = () => {
  return (
    <div className='challenge-section-container'>
      <h1 data-aos='fade-down' className='challenge-section-header'>
        Take a speed test now!
      </h1>
      <TestContainer words={40} wpm={14} characters={130} />
    </div>
  );
};

export default ChallengeSection;
