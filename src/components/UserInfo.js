import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    /*
    * Would it be better to just go back with a URL link to "/searchResults" or
    * is it terrible to rewrite history in this way?
    */
    this.props.history.goBack();
  }
  render() {
    console.log("UserInfo's render");
    return (
      <div>
        <div className="container container--info">
          <h2>{this.props.location.state.name}</h2>
          <img src={this.props.location.state.userImage} className="big-box"/>
          <dl>
            <dd>Gender:</dd><dt>{this.props.location.state.hobby}</dt>
          </dl>
          <dl>
            <dd>email:</dd><dt>{this.props.location.state.email}</dt>
          </dl>
          <p className="button-area">
            <input type="button" value="Go Back" onClick={this.goBack} />
          </p>
        </div>
        <div className="spacing-delete-me"></div>
      </div>
    );
  }
}

export default UserInfo;
