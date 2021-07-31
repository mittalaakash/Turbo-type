import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

const ChallengeSection = ({
  selectedParagraph,
  words,
  wpm,
  characters,
  timeRemaining,
  timerStarted,
}) => {
  return (
    <div className='challenge-section-container'>
      <h1 data-aos='fade-down' className='challenge-section-header'>
        Take a speed test now!
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        words={words}
        wpm={wpm}
        characters={characters}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
      />
    </div>
  );
};

export default ChallengeSection;
