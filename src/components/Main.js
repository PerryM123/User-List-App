import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ComponentOne from '../components/ComponentOne'
import ComponentTwo from '../components/ComponentTwo'
import ComponentThree from '../components/ComponentThree'

/*
* Learn more about React Routing here:
* https://reacttraining.com/react-router/web/example/basic
*/

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageID: 1,
      buttonPressed: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.pageID < 3) {
      this.setState({
        pageID: this.state.pageID + 1
      });
    } else {
      alert("end");
    }
  }
  render() {
    return (
      <div>
        {
          (this.state.pageID == 1) ? <ComponentOne handleClick={this.handleClick} /> : null
        }
        {
          (this.state.pageID == 2) ? <ComponentTwo handleClick={this.handleClick} /> : null
        }
        {
          (this.state.pageID == 3) ? <ComponentThree handleClick={this.handleClick} /> : null
        }
        <div>
          Page ID: {this.state.pageID}
        </div>
      </div>
    );
  }
}

export default Main;