import React, { Component } from 'react';
import magicWand from './magic-wand.svg';
import './AppLogo.css';

class AppLogo extends Component {
  render() {
    return (
      <img src={magicWand} className="App-logo" alt="logo" />
    )
  }
}

export default AppLogo;
