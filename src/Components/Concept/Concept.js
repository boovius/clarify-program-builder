import React, { Component } from 'react';
import './Concept.css';

class Concept extends Component {
  render() {
    const { concept } = this.props;

    let component = null;
    if (concept != null) {
      component = <div className='concept'><span>Concept:</span>{concept}</div>
    }

    return component;
  }
}

export default Concept;
