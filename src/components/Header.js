import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../utils/shab_foods.png";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
