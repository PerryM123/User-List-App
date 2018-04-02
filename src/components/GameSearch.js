import React, { Component } from 'react';
import loading_logo from './../images/loading_icon.png';
import axios from 'axios';


class GameSearch extends Component {
  constructor(props) {
    console.log("GameSearch's render");
    super(props);
    this.state = {
    	data: [],
    	testName: ""
    }
  }

  componentDidMount() {
    let url = axios.get('/arcade_center.json').
	    then( (response) => {
	    	console.log(response);
		    this.setState({ // this this is the window because it lost it's parent's context
		    	testName: response.data.Location[0].name
		    }) // to grab this context, you must bind it
	    })
		  
  }

  render() {
    console.log("GameSearch's render");

    return (
      <div>
      	<h2>Search by game</h2>
      	<p>{this.state.testName}</p>
      </div>
    );
  }
}

export default GameSearch;
