import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("UserInfo's render");
    return (
      <div>
        <div className="container container--info">
          <h2>{this.props.location.state.name}</h2>
          <div className="big-box"></div>
          <img src="" />
          <dl>
            <dd>Hobby:</dd><dt>{this.props.location.state.hobby}</dt>
          </dl>
          <dl>
            <dd>email:</dd><dt>{this.props.location.state.email}</dt>
          </dl>
        </div>
        <div className="spacing-delete-me"></div>
      </div>
    );
  }
}

export default UserInfo;
