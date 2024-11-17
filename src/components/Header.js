import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../utils/shab_foods.png";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg mb-2 bg-pink-100">
      <div className="logo-container">
        <img className="w-56" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "logout" : "login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
