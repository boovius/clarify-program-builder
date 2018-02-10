import React, { Component } from 'react';
import './Unit.css';
import Module from './Module.js'

class Unit extends Component {
  render() {
    const {title, modules} = this.props.unit
    return (
      <div className='Unit'>
        <div className='title'>{title}</div>
        {modules.map((m,i) => <Module key={i} module={m} />)}
      </div>
    )
  }
}

export default Unit;
