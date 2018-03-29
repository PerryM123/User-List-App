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
    console.log("SearchLoader's componentDidMount");
    setTimeout(function() {
      console.log("SearchLoader's setTimeout()");
      this.setState({searchIsDone: true});
      let people = [];
      let person;
      for (let i = 0; i < this.props.userInput; i++) {
        person = {
          name: myData.results[i].name.first + " " + myData.results[i].name.last,
          gender: myData.results[i].gender,
          email: myData.results[i].email,
          img_url: myData.results[i].picture.large
        };
        people.push(person);
      }
      this.props.getResults(people);
    }.bind(this), 2000);
  }
  /*
  * If searching is done, hide spinner
  */
  render() {
    console.log("SearchLoader's render");
    const isDone = this.state.searchIsDone;
    if (isDone) {
      return null;
    }

    return (
      <div>
        <div className="loading">
          <h2>Searching...</h2>
          <img src={loading_logo} alt="loading-icon" />
        </div>
      </div>
    );
  }
}

export default SearchLoader;
