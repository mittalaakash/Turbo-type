import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';
import { paragraphs } from '../../data/paragraphs';

const totalTime = 60;
// const serviceUrl = 'https://shrouded-shore-94383.herokuapp.com/paragraphs/1/9';
const defaultState = {
  selectedParagraph: '',
  testInfo: [],
  timerStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
};

class App extends React.Component {
  state = defaultState;

  fetchNewPara = () => {
    const data = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    const selectedParagraphArray = data.split('');
    const testInfo = selectedParagraphArray.map(letter => {
      return {
        testLetter: letter,
        status: 'notAttempted',
      };
    });
    this.setState({ ...defaultState, testInfo, selectedParagraph: data });
  };

  // fetchNewPara = () => {
  //   fetch(serviceUrl)
  //     .then(response => response.text())
  //     .then(data => {
  //       const selectedParagraphArray = data.split('');
  //       const testInfo = selectedParagraphArray.map(letter => {
  //         return {
  //           testLetter: letter,
  //           status: 'notAttempted',
  //         };
  //       });
  //       this.setState({ ...defaultState, testInfo, selectedParagraph: data });
  //     });
  // };

  componentDidMount() {
    this.fetchNewPara();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        //change the wpm
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => this.fetchNewPara();

  handleUserInput = inputValue => {
    if (!this.state.timerStarted) this.startTimer();

    /**
     * 1. Handle the underflow case - all characters should be shown as not-attempted
     * 2. Handle the overflow case - early exit
     * 3. Handle the backspace case
     *      - Mark the [index+1] element as notAttempted
     *        (irrespective of whether the index is less than zero)
     *      - But, don't forget to check for the overflow here
     *        (index + 1 -> out of bound, when index === length-1)
     * 4. Update the status in test info
     *      1. Find out the last character in the inputValue and it's index
     *      2. Check if the character at same index in testInfo (state) matches
     *      3. Yes -> Correct
     *         No  -> Incorrect (Mistake++)
     * 5. Irrespective of the case, characters, words and wpm can be updated
     */

    const characters = inputValue.length;
    const words = inputValue.split(' ').length;
    const index = characters - 1;

    if (index < 0) {
      const testArr = this.state.testInfo.map(element => {
        return { testLetter: element.testLetter, status: 'notAttempted' };
      });
      this.setState({
        testInfo: testArr,
        words,
        characters,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    // Make a copy of testinfo
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = 'notAttempted';

    // Check for mistake
    const isMistake = inputValue[index] === testInfo[index].testLetter;

    // Update the testInfo
    testInfo[index].status = isMistake ? 'correct' : 'incorrect';

    // Update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    return (
      <div className='app'>
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
