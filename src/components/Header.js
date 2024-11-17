import React, { useState } from "react";
import logo from "../utils/shab_foods.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "logout" : "login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
