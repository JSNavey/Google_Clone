import React, { Component } from 'react';

class TopNav extends Component {
  render() {
    return (
      <div className='top-nav'>
        <div className='left-top-nav'>
          <p>About</p>
          <p>Store</p>
        </div>
        <div className='right-top-nav'>
          <p>Gmail</p>
          <p>Images</p>
          <p>Apps</p>
          <button>Sign in</button>
        </div>
      </div>
    );
  }
}

export default TopNav;