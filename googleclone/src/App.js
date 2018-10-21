import React, { Component } from 'react';
import './App.css';

import TopNav from './components/TopNav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
