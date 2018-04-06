import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentOne extends Component {
  render() {
    return(
      <div className="errorMessage">
        <p>ComponentOne</p>
        <p><input type="button" value="Component 1 Button" onClick={this.props.handleClick}/></p>
      </div>
    );
  }
}

export default ComponentOne;