import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Searcher from '../components/Searcher'
import SearchResults from '../components/SearchResults'
import UserInfo from '../components/UserInfo'
import ComponentOne from '../components/ComponentOne'
import ComponentTwo from '../components/ComponentTwo'
import ComponentThree from '../components/ComponentThree'

/*
* Learn more about React Routing here:
* https://reacttraining.com/react-router/web/example/basic
*/

class Main extends Component {
  render() {
    return (
      <div>
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
      </div>
    );
  }
}

export default Main;