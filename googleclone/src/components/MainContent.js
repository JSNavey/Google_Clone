import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className='middle-container'>
          <img className='google-logo' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' />
          <div className='search-area'>
            <input className='search-input' />
            <div className='search-btn'>
              <button>Google Search</button>
              <button>I'm Feeling Lucky</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;