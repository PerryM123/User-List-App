import React, { Component } from 'react'
import Searcher from '../components/Searcher'
import SearchLoader from '../components/SearchLoader'
import SearchResults from '../components/SearchResults'
import UserInfo from '../components/UserInfo'

class Main extends Component {
  constructor() {
    this.state ({
      isSearching: false;
    });
  }
  render() {
    const isSearching = this.state.isSearching;

    return (
      <div>
        <Searcher />
        <SearchLoader />
        <SearchResults />
        <UserInfo />
      </div>
    );
  }
}

export default Main;