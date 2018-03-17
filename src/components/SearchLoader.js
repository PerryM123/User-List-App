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
      console.log("SearchLoader's componentDidMount");
      this.setState({searchIsDone: true});
      this.props.isFinished();
    var people = [];
    var person;
    for (var i = 0; i < this.props.userInput; i++) { 
      person = {
        name: myData.results[i].name.first + " " + myData.results[i].name.first,
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
    const isDone = this.state.searchIsDone;
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
      {
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
