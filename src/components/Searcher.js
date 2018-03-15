import React, { Component } from 'react';
import SearchLoader from '../components/SearchLoader'

class Searcher extends Component {
  constructor(props) {
    console.log("Searcher's constructor");
    super(props);
    this.state = {
      isSearching: false,
      searchResultsData: ["jo", "shmo"]
    };
    this.searchStart = this.searchStart.bind(this);
    this.searchEnd = this.searchEnd.bind(this);
    this.getSearchData = this.getSearchData.bind(this);
  }

  searchStart() {
    console.log("searchStart+++++++++++++++++++++");
    this.setState({
      isSearching: true
    });
  }
  searchEnd() {
    console.log("searchEnd--------------------------");
    this.setState({
      isSearching: false
    });

    /*
    * history.push()?
    * Is this the standard for programmatically forcing page jumps?
    */
    this.props.history.push('/results');
  }

  getSearchData(data) {
    this.setState({
      searchResultsData: data
    });
  }


  render() {
    console.log("Searcher's render");
    const isSearching = this.state.isSearching;
    console.log("isSearching: " + isSearching);
    return (
      <div>
        <div className="search">
        <p>How many users to search?</p>
          <input placeholder="Enter here..." type="text" />
          <input value="Search" type="button" onClick={this.searchStart} />
        </div>
        <div className="spacing-delete-me"></div>
        {
          /*
          * React Questions:
          * 1)
          * What is the standard way of writing the ternary operator?
          * This (URL below..) way of writing it is more preferred for ReactJS? -
          * URL: https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs
          *
          * 2)
          * When SearchLoader is completed, it still exist and doesn't seem to hide/be destroyed.
          * Is the point of sending a parent component's function to a child component is to update parent from the child???
          * Hint to solving problem: 
          * Hint#1: https://stackoverflow.com/questions/42917854/pass-value-from-child-to-parent-component-in-react
          * Hint#2: https://ourcodeworld.com/articles/read/409/how-to-update-parent-state-from-child-component-in-react
          * Hint#3: https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs
          * Hint#4: https://eddyerburgh.me/toggle-visibility-with-react
          */


          this.state.isSearching ? <SearchLoader getResults={this.getSearchData} isFinished={this.searchEnd} isSearching={isSearching} /> : null
        }
      </div>
    );
  }
}

export default Searcher;