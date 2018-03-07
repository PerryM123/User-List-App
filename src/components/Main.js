import React, { Component } from 'react'
import Searcher from '../components/Searcher'
import SearchResults from '../components/SearchResults'
import UserInfo from '../components/UserInfo'

class Main extends Component {
  render() {
    return (
      <div>
        <Searcher />
        <SearchResults />
        <UserInfo />
      </div>
    );
  }
}

export default Main;