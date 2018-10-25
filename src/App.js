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
      this.setState({ friends: [...response] });
    });
  }

  updateFromChild = friendsFromChild => {
    this.setState({ friends: [...friendsFromChild] });
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        {this.state.friends.map(val, i => {
          return (
            <DisplayBox friends={val} updateFromChild={this.updateFromChild} />
          );
        })}
      </div>
    );
  }
}

export default App;
