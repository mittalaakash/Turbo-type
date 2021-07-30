import React from 'react';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/* Nav Section */}
        <Nav />
        {/* Landing page */}
        <Landing />

        {/* Challenge Section */}

        {/* Footer */}
      </div>
    );
  }
}
export default App;
