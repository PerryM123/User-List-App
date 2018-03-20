import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorInput extends Component {
  render() {
    return(
      <p className="errorMessage">
        {this.props.message}
      </p>
    );
  }
}

/*
 * React Questions:
 * Where in the code should this be placed?
 * Here? or at the top?
 */
ErrorInput.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorInput;