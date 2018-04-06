import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentThree extends Component {
  render() {
    return(
      <div className="errorMessage">
        <p>ComponentThree</p>
        <p><input type="button" value="Component 3 Button" onClick={this.props.handleClick}/></p>
      </div>
    );
  }
}

export default ComponentThree;