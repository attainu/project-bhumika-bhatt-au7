import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";
import classes from "./Navbar.module.css";

const navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper blue">
        <NavLink to="/" exact class="brand-logo left">
          <img className={classes.Logo} src={Logo} alt="connectX" />
        </NavLink>
        <ul id="nav-mobile" className="right ">
          <li>
            <NavLink to="/">ConnectX</NavLink>
          </li>
          <li>
            <NavLink to="/login" exact>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create Post</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
