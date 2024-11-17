import React, { Component } from "react";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Shab Foods</h2>
        <User name="shab_dev" location="Bengaluru" />
      </div>
    );
  }
}

export default About;
