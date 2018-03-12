import React, { Component } from 'react'
import Searcher from '../components/Searcher'
import SearchResults from '../components/SearchResults'
import UserInfo from '../components/UserInfo'

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			SearchIsDone: false,
		};
		this.searchDone = this.searchDone.bind(this);
		this.handleTouchTop = this.handleTouchTop.bind(this);
	}
	searchDone() {
		this.setState({
			SearchIsDone: true
		});
	}
	handleTouchTop() {
		console.log("handleTouchTop was pressed!!!");
	}
  render() {
    return (
	    <MuiThemeProvider muiTheme={muiTheme}>
	      <div>
	        <Searcher />
	        <SearchResults />
	        <UserInfo />
	        <RaisedButton
		        label="This is a button!"
		        secondary="true"
		        onTouchTap="{this.handleTouchTop}"
	        />
	      </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;