import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ResultsItem extends Component {
  constructor(props) {
    console.log("ResultsItem's constructor");
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // alert(this.props.name + ", " + this.props.hobby + ", " + this.props.email); // debugging
    this.props.history.push({
      pathname: '/user-info',
      state: {
        name: this.props.name,
        hobby: this.props.hobby,
        email: this.props.name
      }
    });
  }


  render() {
    console.log("ResultsItem's render");
    return (
      <div className="item" onClick={this.handleClick}>
        <div className="box"></div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
// Where in the code should this be placed?
// Here? or at the top?
ResultsItem.propTypes = {
  name: PropTypes.string.isRequired,
  hobby: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default withRouter(ResultsItem);