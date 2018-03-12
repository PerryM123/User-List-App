import React, { Component } from 'react';
import loading_logo from './../images/loading_icon.png';

class SearchLoader extends Component {
  constructor(props) {
    console.log("SearchLoader's render");
    super(props);
    this.state = {
      searchIsDone: false
    }
  }

  componentDidMount() {
    console.log("SearchLoader's render");
    setTimeout(function() {
      var how = this.state.searchIsDone;
            console.log("SearchLoader's componentDidMount");
            console.log("before: " + how);
            this.setState({searchIsDone: true});
            how = this.state.searchIsDone;
            console.log("after: " + how);
            console.log("HI");
        }.bind(this), 5000);
  }
  /*
  * If searching is done, hide spinner
  */
  render() {
    console.log("SearchLoader's render");
    const isDone = this.state.searchIsDone;
    console.log("SearchLoader: isDone: " + isDone);
    if (isDone) {
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
