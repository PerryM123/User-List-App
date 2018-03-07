import React, { Component } from 'react';

class Searcher extends Component {
  render() {
    return (
      <div>
        <div className="search">
        <p>How many users to search?</p>
          <input placeholder="Enter here..." type="text" />
          <input value="Search" type="button" />
        </div>
        <div class="spacing-delete-me"></div>
      </div>
    );
  }
}

export default Searcher;