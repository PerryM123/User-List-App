import React, { Component } from 'react';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const dataName = event.target.getAttribute("name");
    const dataHobby = event.target.getAttribute("hobby");
    const dataEmail = event.target.getAttribute("email");
    alert(dataName + ", " + dataHobby + ", " + dataEmail);
    // this.props.history.push({
    //   pathname: '/user-info',
    //   state: { 
    //     name: dataName,
    //     hobby: dataHobby,
    //     email: dataEmail 
    //   }
    // });
    
  }
  render() {
    console.log("SearchResults's render");
    return (
      <div>
        <div className="container--search">
          <h2>Search Results</h2>
          <div className="item" onClick={this.handleClick} data-name="person1" data-hobby="hobby1" data-email="email1@email.com">
            <div className="box"></div>
            <p>person1</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person2" data-hobby="hobby2" data-email="email2@email.com">
            <div className="box"></div>
            <p>person2</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person3" data-hobby="hobby3" data-email="email3@email.com">
            <div className="box"></div>
            <p>person3</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person4" data-hobby="hobby4" data-email="email4@email.com">
            <div className="box"></div>
            <p>person4</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person5" data-hobby="hobby5" data-email="email5@email.com">
            <div className="box"></div>
            <p>person5</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person6" data-hobby="hobby6" data-email="email6@email.com">
            <div className="box"></div>
            <p>person6</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person7" data-hobby="hobby7" data-email="email7@email.com">
            <div className="box"></div>
            <p>person7</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person8" data-hobby="hobby8" data-email="email8@email.com">
            <div className="box"></div>
            <p>person8</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person9" data-hobby="hobby9" data-email="email9@email.com">
            <div className="box"></div>
            <p>person9</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person10" data-hobby="hobby10" data-email="email10@email.com">
            <div className="box"></div>
            <p>person10</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person11" data-hobby="hobby11" data-email="email11@email.com">
            <div className="box"></div>
            <p>person11</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person12" data-hobby="hobby12" data-email="email12@email.com">
            <div className="box"></div>
            <p>person12</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person13" data-hobby="hobby13" data-email="email13@email.com">
            <div className="box"></div>
            <p>person13</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person14" data-hobby="hobby14" data-email="email14@email.com">
            <div className="box"></div>
            <p>person14</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person15" data-hobby="hobby15" data-email="email15@email.com">
            <div className="box"></div>
            <p>person15</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person16" data-hobby="hobby16" data-email="email16@email.com">
            <div className="box"></div>
            <p>person16</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person17" data-hobby="hobby17" data-email="email17@email.com">
            <div className="box"></div>
            <p>person17</p>
          </div>
          <div className="item" onClick={this.handleClick} data-name="person18" data-hobby="hobby18" data-email="email18@email.com">
            <div className="box"></div>
            <p>person18</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
