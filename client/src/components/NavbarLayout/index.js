import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "./images/logo (32x32).png";

const navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" exact className="brand-logo">
          <img src={Logo} alt="connectX" />
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">ConnectX</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
