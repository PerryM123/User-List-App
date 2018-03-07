import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <div className="container container--info">
          <h2>Jack Rose</h2>
          <div className="box"></div>
          <img src="" />
          <dl>
            <dd>Hobby:</dd><dt>Baseball</dt>
          </dl>
          <dl>
            <dd>email:</dd><dt>Baseball@aol.com</dt>
          </dl>
        </div>
        <div className="spacing-delete-me"></div>
      </div>
    );
  }
}

export default UserInfo;
