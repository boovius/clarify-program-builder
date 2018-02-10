import React, { Component } from 'react';
import './App.css';

import AppLogo from './AppLogo.js'
import UnitHeader from './UnitHeader.js'

import units from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppLogo />
          <h1 className="App-title">Clairfy Builder</h1>
        </header>
        <UnitHeader units={units} />
      </div>
    );
  }
}

export default App;
