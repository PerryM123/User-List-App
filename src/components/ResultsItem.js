import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ResultsItem extends Component {
  constructor(props) {
    // console.log("ResultsItem's constructor"); // debugging
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
        email: this.props.name,
        userImage: this.props.userImage,
      }
    });
  }


  render() {
    // console.log("ResultsItem's render"); // debugging
    return (
      <div tabIndex="0" className="item" onClick={this.handleClick}>
        <img src={this.props.userImage} alt="user thumbnail" className="box"/>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
/*
 * React Questions:
 * Where in the code should this be placed?
 * Here? or at the top?
 */
ResultsItem.propTypes = {
  name: PropTypes.string.isRequired,
  hobby: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired
};

/*
 * About using routers with child components to have history.push() to work
 * https://stackoverflow.com/questions/43837212/this-props-history-push-works-in-some-components-and-not-others
 *
 * More on React Router:
 * https://reacttraining.com/react-router/web/api/withRouter
 */
export default withRouter(ResultsItem);