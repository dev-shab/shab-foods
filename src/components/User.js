import React, { Component } from "react";
import { USER_API } from "../utils/constants";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(USER_API);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: shabreesh_nair</h4>
      </div>
    );
  }
}

export default User;
