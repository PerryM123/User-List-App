import React, { Component } from 'react';
import loading_logo from './../images/loading_icon.png';
import myData from './../json/data.json';

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
    }.bind(this), 2000);
  }
  /*
  * If searching is done, hide spinner
  */
  render() {
    console.log("JSON testing: ");
    console.log(myData);
    console.log("myData.results[0]: ");
    console.log(myData.results[0]);
    console.log("myData.results[1]: ");
    console.log(myData.results[1]);
    console.log("myData.results[2]: ");
    console.log(myData.results[2]);
    console.log("SearchLoader's render");
    const isDone = this.state.searchIsDone;
    console.log("SearchLoader: isDone: " + isDone);
    console.log("WOw: " + myData.results[0].name.first);
    let results = myData.results.map((item, index) => {
       <li key={index}>
        <p>gender: {item.gender}</p>
      </li>
    });
    if (isDone) {
      return null;
    }
    return (
      <div>
      where?
      {
        myData.results.map((item, index) => 
         <li key={index}>
          <p>gender: {item.gender}</p>
        </li>
        )
      }
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
