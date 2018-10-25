import React from "react";
import axios from "axios";

export default class DisplayBox extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  changeColor = color => {
    axios
      .put("/change-color", {
        color: color,
        name: this.props.friends.name
      })
      .then(response => {
        this.props.updateFromChild(response.data);
      });
  };

  render() {
    return (
      <div
        style={{
          height: "200px",
          width: "500px",
          backgroundColor: "lightgrey",
          boxShadow: "1px 1px 1px #333",
          borderRadius: "25px",
          color: this.props.friends.color
        }}
      >
        {this.props.name}
        <input
          placeholder="what color?"
          onChange={e => this.setState({ input: e })}
        />
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}
