import React, { Component } from 'react';
// import './App.css';
import loading_logo from './../images/loading_icon.png';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="search">
        <p>How many users to search?</p>
          <input placeholder="Enter here..." type="text" />
          <input value="Search" type="button" />
        </div>
        <div class="spacing-delete-me"></div>
        <div className="loading">
          <h2>Searching...</h2>
          <img src={loading_logo} />
        </div>
        <div class="spacing-delete-me"></div>
        <div className="container">
          <h2>Search Results</h2>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
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
        <div class="spacing-delete-me"></div>
      </div>
    );
  }
}

export default Main;
