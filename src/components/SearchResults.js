import React, { Component } from 'react';
import ResultsItem from '../components/ResultsItem';

class SearchResults extends Component {
  constructor(props) {
    console.log("SearchResults constructor ");
    super(props);

    console.log("results!!!!!"); // debugging
    console.log(this.props.results);
  }
  render() {
    console.log("SearchResults's render"); // debugging
    return (
      <div>
        <div className="container--search">
          <h2>Search Results</h2>
          <ResultsItem name="name01" hobby="hobby01" email="email01" userImage="something.jpg" />
          <ResultsItem name="name02" hobby="hobby02" email="email02" userImage="something.jpg" />
          <ResultsItem name="name03" hobby="hobby03" email="email03" userImage="something.jpg" />
          <ResultsItem name="name04" hobby="hobby04" email="email04" userImage="something.jpg" />
          <ResultsItem name="name05" hobby="hobby05" email="email05" userImage="something.jpg" />
          <ResultsItem name="name06" hobby="hobby06" email="email06" userImage="something.jpg" />
          <ResultsItem name="name07" hobby="hobby07" email="email07" userImage="something.jpg" />
          <ResultsItem name="name08" hobby="hobby08" email="email08" userImage="something.jpg" />
          <ResultsItem name="name09" hobby="hobby09" email="email09" userImage="something.jpg" />
          <ResultsItem name="name10" hobby="hobby10" email="email10" userImage="something.jpg" />
          <ResultsItem name="name11" hobby="hobby11" email="email11" userImage="something.jpg" />
          <ResultsItem name="name12" hobby="hobby12" email="email12" userImage="something.jpg" />
          <ResultsItem name="name13" hobby="hobby13" email="email13" userImage="something.jpg" />
          <ResultsItem name="name14" hobby="hobby14" email="email14" userImage="something.jpg" />
          <ResultsItem name="name15" hobby="hobby15" email="email15" userImage="something.jpg" />
          <ResultsItem name="name16" hobby="hobby16" email="email16" userImage="something.jpg" />
          <ResultsItem name="name17" hobby="hobby17" email="email17" userImage="something.jpg" />
          <ResultsItem name="name18" hobby="hobby18" email="email18" userImage="something.jpg" />
          <ResultsItem name="name19" hobby="hobby19" email="email19" userImage="something.jpg" />
          <ResultsItem name="name20" hobby="hobby20" email="email20" userImage="something.jpg" />
        </div>
      </div>
    );
  }
}

export default SearchResults;
