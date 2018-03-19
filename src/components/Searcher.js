import React, { Component } from 'react';
import SearchLoader from '../components/SearchLoader'
import ErrorInput from '../components/ErrorInput'

class Searcher extends Component {
  constructor(props) {
    console.log("Searcher's constructor"); // debugging
    super(props);
    this.state = {
      isSearching: false,
      searchResultsData: [],
      textInput: "",
      errorInput: false
    };
    this.searchStart = this.searchStart.bind(this);
    this.searchEnd = this.searchEnd.bind(this);
    this.getSearchData = this.getSearchData.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  searchStart() {
    console.log("searchStart+++++++++++++++++++++"); // debugging
    if (this.state.errorInput) {
      this.setState({
        errorInput: false
      });
    }
    // check if value is a number
    var currentInput = this.state.textInput;
    if (isNaN(currentInput) || currentInput.length < 1 || currentInput < 1) {
      console.log("Input Error");
      this.setState({
        errorInput: true
      });
      return; // if an unexpected value appears, return and do nothing
    }

    this.setState({
      isSearching: true
    });
  }

  searchEnd() {
    console.log("searchEnd--------------------------"); // debugging
    this.setState({
      isSearching: false
    });

    /*
    * React Question
    * history.push()?
    * Is this the standard for programmatically forcing page jumps?
    */
    this.props.history.push({
      pathname: '/results',
      state: {
        results: this.state.searchResultsData
      }
    });

  }

  /*
  * I'm getting an error here...
  * Error details: Can only update a mounted or mounting
  * component. This usually means you called setState,
  * replaceState, or forceUpdate on an unmounted component.
  * This is a no-op.
  *
  * This may have to do with setState being asynchronous?!?!
  * 1) https://blog.cloudboost.io/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e
  * 2) https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1
  */
  getSearchData(data) {
    console.log("data!1");
    console.log(data);
    this.setState({
      searchResultsData: data
    });
  }

  updateInput(e) {
    /*
    * React Question:
    * When is the appropriate times to use:
    * 1) var
    * 2) const
    * 3) let
    */
    var value = e.target.value;
    this.setState({
      textInput: value
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.searchStart();
    }
  }

  render() {
    console.log("Searcher's render"); // debugging
    const isSearching = this.state.isSearching;
    console.log("isSearching: " + isSearching); // debugging
    return (
      <div className="container container--first-screen">
        <div className="search">
        <p>How many users to search (numbers only!!)?</p>
          <input placeholder="Enter here..." onKeyPress={this.handleKeyPress} type="text" onChange={this.updateInput} className="textbox-input" />
          <input value="Search" type="button" onClick={this.searchStart} className="button-input" />
          {
            this.state.errorInput ? <ErrorInput message="Please enter NUMBER values only" /> : null
          }
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


          this.state.isSearching ? <SearchLoader 
          userInput={this.state.textInput} 
          getResults={this.getSearchData}
          isFinished={this.searchEnd} 
          isSearching={isSearching} /> : null
        }
        </div>
      </div>
    );
  }
}

export default Searcher;