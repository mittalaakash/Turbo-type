import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({ words, characters, wpm }) => {
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
        <p>this is the real challenge</p>
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
