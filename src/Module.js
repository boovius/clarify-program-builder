import React, { Component } from 'react';
import './Module.css';

class Module extends Component {
  render() {
    return (
      <div className='Module'>{this.props.module.title}</div>
    )
  }
}

export default Module;
