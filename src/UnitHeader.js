import React, { Component } from 'react';
import Unit from './Unit.js';
import './Unit.css';

class UnitHeader extends Component {
  render() {
    return (
      <div className='Unit-header'>
        {this.props.units.map((u,i) => <Unit key={i} unit={u} />)}
      </div>
    )
  }
}

export default UnitHeader;
