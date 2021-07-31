import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const totalTime = 1;
const serviceUrl = 'http://metaphorpsum.com/paragraphs/1/9';

class App extends React.Component {
  state = {
    selectedParagraph: 'My name is Aakash Mittal',
    testInfo: [],
    timerStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  };
  componentDidMount() {
    // fetch(serviceUrl)
    //   .then(response => response.text())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ selectedParagraph: data });
    //   });
    const selectedParagraphArray = this.state.selectedParagraph.split('');
    const testInfo = selectedParagraphArray.map(letter => {
      return {
        testLetter: letter,
        status: 'notAttempted',
      };
    });
    this.setState({ testInfo });
  }
  render() {
    return (
      <div className='app'>
        {/* Nav Section */}
        <Nav />
        {/* Landing page */}
        <Landing />

        {/* Challenge Section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
        />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}
export default App;
