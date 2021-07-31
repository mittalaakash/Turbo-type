import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer = ({
  selectedParagraph,
  words,
  wpm,
  characters,
  timeRemaining,
  timerStarted,
  testInfo,
}) => {
  return (
    <div className='test-container'>
      {timeRemaining > 0 ? (
        <div data-aos='fade-up' className='typing-challenge-cont'>
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            words={words}
            wpm={wpm}
            characters={characters}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            testInfo={testInfo}
          />
        </div>
      ) : (
        <div className='try-again-cont'>
          <TryAgain words={words} characters={characters} wpm={wpm} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
