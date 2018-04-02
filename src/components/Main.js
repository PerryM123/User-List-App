import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Searcher from '../components/Searcher'
import SearchResults from '../components/SearchResults'
import UserInfo from '../components/UserInfo'
import GameSearch from '../components/GameSearch'

/*
* Learn more about React Routing here:
* https://reacttraining.com/react-router/web/example/basic
*/

class Main extends Component {
  render() {
    return (
      <div>
      	<Switch>
          <Route exact path='/' component={Searcher}/>
          <Route exact path='/results' component={SearchResults}/>
          <Route exact path='/user-info' component={UserInfo}/>
          <Route exact path='/test' component={GameSearch}/>

        </Switch>
      </div>
    );
  }
}

export default Main;