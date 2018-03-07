import React, { Component } from 'react';

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.searchStart = this.searchStart.bind(this);
  }

  searchStart() {
    
  }
  render() {
    return (
      <div>
        <div className="search">
        <p>How many users to search?</p>
          <input placeholder="Enter here..." type="text" />
          <input value="Search" type="button" onClick={this.searchStart} />
        </div>
        <div className="spacing-delete-me"></div>
      </div>
    );
  }
}

export default Searcher;