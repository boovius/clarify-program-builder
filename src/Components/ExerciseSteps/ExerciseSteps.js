import React, { Component } from 'react';
import './ExerciseSteps.css';

class ExerciseSteps extends Component {
  render() {
    const { exerciseSteps } = this.props;

    let component = null;
    if (exerciseSteps != null) {
      component = (
        <div className='ExerciseSteps'>
          <ul>
            {exerciseSteps.map((step,i) => <li key={i}>{step}</li>)}
          </ul>
        </div>
      )
    }

    return component;
  }
}

export default ExerciseSteps;
