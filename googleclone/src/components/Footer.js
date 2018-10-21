import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='left-footer'>
          <p>Advertising</p>
          <p>Business</p>
        </div>
        <div className='right-footer'>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    );
  }
}

export default Footer;