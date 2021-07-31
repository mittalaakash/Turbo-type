import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  wpm,
  characters,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className='typing-challenge-container'>
      {/* Details Section */}
      <div className='details-container'>
        {/* words typed */}
        <ChallengeDetailsCard cardName='Words' cardValue={words} />
        {/* characters typed */}
        <ChallengeDetailsCard cardName='Characters' cardValue={characters} />
        {/* speed */}
        <ChallengeDetailsCard cardName='Speed' cardValue={wpm} />
      </div>
      {/* the real challenge */}
      <div className='typewriter-container'>
        <TypingChallenge
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
