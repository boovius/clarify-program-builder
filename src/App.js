import React, { Component } from 'react';
import './App.css';

import AppLogo from './Components/AppLogo/AppLogo.js'
import Unit from './Components/Unit/Unit.js'
import StageCreator from './Components/StageCreator/StageCreator.js'

import units from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppLogo />
          <h1 className="App-title">Clairfy Builder</h1>
        </header>
        <div className='Units'>
          {units.map((u,i) => <Unit key={i} unit={u} />)}
        </div>
        <StageCreator />
      </div>
    );
  }
}

export default App;
