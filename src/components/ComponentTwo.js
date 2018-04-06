import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentTwo extends Component {
  render() {
    return(
      <div className="errorMessage">
        <p>ComponentTwo</p>
        <p><input type="button" value="Component 2 Button" onClick={this.props.handleClick}/></p>
      </div>
    );
  }
}

export default ComponentTwo;