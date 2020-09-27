import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

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
          <li>
            <NavLink to="/createPost">SignUp</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
