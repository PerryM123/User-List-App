import React, { Component } from 'react';
import ResultsItem from '../components/ResultsItem';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("SearchResults's render");
    return (
      <div>
        <div className="container--search">
          <h2>Search Results</h2>
          <ResultsItem name="name01" hobby="hobby01" email="email01" />
          <ResultsItem name="name02" hobby="hobby02" email="email02" />
          <ResultsItem name="name03" hobby="hobby03" email="email03" />
          <ResultsItem name="name04" hobby="hobby04" email="email04" />
          <ResultsItem name="name05" hobby="hobby05" email="email05" />
          <ResultsItem name="name06" hobby="hobby06" email="email06" />
          <ResultsItem name="name07" hobby="hobby07" email="email07" />
          <ResultsItem name="name08" hobby="hobby08" email="email08" />
          <ResultsItem name="name09" hobby="hobby09" email="email09" />
          <ResultsItem name="name10" hobby="hobby10" email="email10" />
          <ResultsItem name="name11" hobby="hobby11" email="email11" />
          <ResultsItem name="name12" hobby="hobby12" email="email12" />
          <ResultsItem name="name13" hobby="hobby13" email="email13" />
          <ResultsItem name="name14" hobby="hobby14" email="email14" />
          <ResultsItem name="name15" hobby="hobby15" email="email15" />
          <ResultsItem name="name16" hobby="hobby16" email="email16" />
          <ResultsItem name="name17" hobby="hobby17" email="email17" />
          <ResultsItem name="name18" hobby="hobby18" email="email18" />
          <ResultsItem name="name19" hobby="hobby19" email="email19" />
          <ResultsItem name="name20" hobby="hobby20" email="email20" />
        </div>
      </div>
    );
  }
}

export default SearchResults;
