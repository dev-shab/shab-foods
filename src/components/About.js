import React, { Component } from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Shab Foods</h2>
        <div>
          <UserContext.Consumer>
            {(data) => <div>{data.loggedInUser}</div>}
          </UserContext.Consumer>
        </div>
        <User name="shab_dev" location="Bengaluru" />
      </div>
    );
  }
}

export default About;
