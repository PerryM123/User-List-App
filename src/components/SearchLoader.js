import React, { Component } from 'react';
import loading_logo from './../images/loading_icon.png';

class SearchLoader extends Component {
  constructor(props) {
    super(props);
    var word = this.props.searchState;
    console.log("word: " + word)
  }
  render() {
    const isSearching = this.props.searchState;
    if (!isSearching) {
      return null;
    }
    return (
      <div>
        <div className="loading">
          <h2>Searching...</h2>
          <img src={loading_logo} />
        </div>
        <div className="spacing-delete-me"></div>
      </div>
    );
  }
}

export default SearchLoader;
