import React, { Component } from 'react';
import SearchLoader from '../components/SearchLoader'

class Searcher extends Component {
  constructor(props) {
    console.log("Searcher's constructor");
    super(props);
    this.state = {
      isSearching: false
    };
    this.searchStart = this.searchStart.bind(this);
  }

  searchStart() {
    this.setState({
      isSearching: true
    });
  }

  render() {
    console.log("Searcher's render");
    const isSearching = this.state.isSearching;
    console.log("isSearching: " + isSearching);
    return (
      <div>
        <div className="search">
        <p>How many users to search?</p>
          <input placeholder="Enter here..." type="text" />
          <input value="Search" type="button" onClick={this.searchStart} />
        </div>
        <div className="spacing-delete-me"></div>
        {
          // What is the standard way of writing the ternary operator?
          // This (URL below..) way of writing it is more preferred for ReactJS? -
          // URL: https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs
          this.state.isSearching ? <SearchLoader isSearching={isSearching} /> : null
        }
      </div>
    );
  }
}

export default Searcher;