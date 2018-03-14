import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Searcher from '../components/Searcher'
import SearchResults from '../components/SearchResults'
import UserInfo from '../components/UserInfo'

class Main extends Component {
  render() {
    return (
      <div>
      	<Switch>
          <Route exact path='/' component={Searcher}/>
          <Route exact path='/results' component={SearchResults}/>
          <Route exact path='/user-info' component={UserInfo}/>
        </Switch>
      </div>
    );
  }
}

export default Main;