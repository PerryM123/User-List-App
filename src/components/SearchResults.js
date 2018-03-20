import React, { Component } from 'react';
import ResultsItem from '../components/ResultsItem';

class SearchResults extends Component {
  constructor(props) {
    console.log("SearchResults constructor ");
    super(props);
    this.state = ({
      userList: this.props.location.state.results
    });

  }
  render() {
    console.log("SearchResults's render"); // debugging
    var someList = this.state.userList;
    console.log("MAAAAAAAAAAAAAAAAAAAAN");
    console.log(someList);
    let list = someList.map((item, index) => {
       <li key={index}>
        <p>gender: {item.gender}</p>
      </li>
    });
    return (
      <div>
        <div className="container container--search">
          <h2>Search Results</h2>
          {/*
            * React Question:
            * Is it possible to enable tabbing for all these items?
            * How do you do that in the first place?
            */}
            {
              someList.map((person, index) => (
                <ResultsItem key={index} name={person.name} hobby={person.gender} email={person.email} userImage={person.img_url} />
              ))
            }
        </div>
      </div>
    );
  }
}

export default SearchResults;
