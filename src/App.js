import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import DisplayBox from "./components/DisplayBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get("/get-info").then(response => {
      console.log(response);
      this.setState({ friends: [...response.data] });
    });
  }

  updateFromChild = friendsFromChild => {
    this.setState({ friends: [...friendsFromChild] });
  };

  render() {
    console.log("this.state.friends", this.state.friends);
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        {this.state.friends.map(val => {
          return (
            <DisplayBox friends={val} updateFromChild={this.updateFromChild} />
          );
        })}
      </div>
    );
  }
}

export default App;
