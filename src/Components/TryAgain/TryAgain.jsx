import React from 'react';
import './TryAgain.css';

const TryAgain = ({ words, characters, wpm }) => {
  return (
    <div className='try-again-container'>
      <h1>Test Results</h1>
      <div className='result-container'>
        <p>
          <b>Characters:</b>
          {characters}
        </p>
        <p>
          <b>Words:</b>
          {words}
        </p>
        <p>
          <b>Speed:</b>
          {wpm}
        </p>
      </div>
    </div>
  );
};
export default TryAgain;
