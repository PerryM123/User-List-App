import React, { Component } from 'react';
import loading_logo from './../images/loading_icon.png';

class SearchLoader extends Component {
  render() {
    return (
      <div>
        <div className="loading">
          <h2>Searching...</h2>
          <img src={loading_logo} />
        </div>
        <div class="spacing-delete-me"></div>
      </div>
    );
  }
}

export default SearchLoader;
