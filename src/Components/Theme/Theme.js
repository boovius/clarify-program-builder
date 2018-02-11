import React, { Component } from 'react';
import './Theme.css';

class Theme extends Component {
  render() {
    const { theme } = this.props;

    let component = null;
    if (theme != null) {
      component = <div className='Theme'>"{theme}"</div>
    }

    return component;
  }
}

export default Theme;
