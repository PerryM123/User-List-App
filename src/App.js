import React, { Component } from 'react';
import Main from './components/Main.js';
/*
* Question
* Does each component need to handle it's own css?
* Or should we have just one css file handling the styles if all pages?
* Or is there a specific ReactJS way to approach this?
*
* Reference URL:
* https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
*
*/
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App hide-me-d00d">
        <Main />
      </div>
    );
  }
}

export default App;
