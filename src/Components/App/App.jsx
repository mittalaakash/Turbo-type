import React from 'react';
import Footer from '../Footer/Footer';
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
        <Footer />
      </div>
    );
  }
}
export default App;
