import React, { Component } from 'react';
import './Module.css';

import Theme from '../Theme/Theme.js';
import Concept from '../Concept/Concept.js';
import ExerciseSteps from '../ExerciseSteps/ExerciseSteps.js';

class Module extends Component {
  constructor() {
    super();
    this.state = {
      full: false,
      selected: false,
    }
    this._displayModule = this._displayModule.bind(this);
    this._closeModule = this._closeModule.bind(this);
    this._select = this._select.bind(this);
  }

  _displayModule(e) {
    this.setState({full: true});
  }

  _closeModule(e) {
    this.setState({full: false});
  }

  _select(e) {
    this.setState({selected: !this.state.selected});
  }

  render() {
    const { title, theme, concept, exerciseSteps } = this.props.module;

    let classes = null;
    let fullModule = null;
    if (this.state.full) {
      classes = 'Module--full Module'
      fullModule = (
        <div>
          <Theme theme={theme} />
          <Concept concept={concept} />
          <ExerciseSteps exerciseSteps={exerciseSteps} />
        </div>
      )
    } else {
      classes = 'Module--collapsed Module'
    }
    if (this.state.selected) {
      classes = classes + ' Module--selected';
    }

    return (
      <div
        onMouseEnter={this._displayModule}
        onMouseLeave={this._closeModule}
        onClick={this._select}
        className={classes}
      >
        <div className='Module-title'>{title}</div>
        {fullModule}
      </div>
    )
  }
}

export default Module;
