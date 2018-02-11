import React, { Component } from 'react';
import './StageCreator.css';
import up from './arrow-up.png';
import down from './arrow-down.png';

import { CSSTransitionGroup } from 'react-transition-group'

class StageCreator extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
      open: false
    }
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._openDrawer = this._openDrawer.bind(this);
    this._closeDrawer = this._closeDrawer.bind(this);
    this._createNewStage = this._createNewStage.bind(this);
    this._classesAndContents = this._classesAndContents.bind(this);
  }

  _handleMouseEnter() {
    this.setState({hovered: true});
  }

  _handleMouseLeave() {
    this.setState({hovered: false});
  }

  _createNewStage() {
    console.log('create new stage now');
  }

  _openDrawer() {
    this.setState({open: true});
  }

  _closeDrawer() {
    this.setState({open: false});
  }

  _standardContents() {
    return (
      <div
        className='StageCreator-arrowBar'
        onClick={this._openDrawer}
      >
        <img src={up} alt='open stage creator' />
      </div>
    )
  }

  _hoveredClosedContents() {
    return (
      <div
        className='StageCreator-arrowBar'
        onClick={this._openDrawer}
      >
        <span>Stage</span>
        <img src={up} alt='open stage creator' />
        <span>Creator</span>
      </div>
    )
  }

  _openContents() {
    return (
      <div>
        <div
          className='StageCreator-arrowBar'
          onClick={this._closeDrawer}
        >
          <span>Stage</span>
          <img src={down} alt='close stage creator' />
          <span>Creator</span>
        </div>
        <div
          className='StageCreator-body'
          onClick={this._createNewStage}
        >
          Stage Creator Body
        </div>
      </div>
    )
  }

  _classesAndContents() {
    let contents = null;
    let classes = 'StageCreator';

    if (this.state.hovered && !this.state.open) {
      contents = this._hoveredClosedContents();
    } else if (this.state.open) {
      classes = classes + ' StageCreator--open';
      contents = this._openContents();
    } else {
      contents = this._standardContents();
    }

    return { classes, contents };
  }


  render() {
    const { classes, contents } = this._classesAndContents()
    return (
      <div
        className={classes}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._handleAnywhereClick}
      >
        <CSSTransitionGroup
          transitionName='sc-trans'
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={3000}
        >
          {contents}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default StageCreator;
