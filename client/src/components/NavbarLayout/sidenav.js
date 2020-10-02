import React from "react";
import { Card, CardTitle } from "react-materialize";

import "./style.scss";

const Sidenav = (props) => {
  const { showProfile, showSettings, logoutHandler, search } = props;
  const userName = JSON.parse(localStorage.getItem("User")).userName;

  return (
    <div>
      <Card
        id="dp"
        header={
          <CardTitle image="https://www.w3schools.com/w3images/avatar2.png"></CardTitle>
        }
      >
        {"@" + userName}
      </Card>
      <form onSubmit={search}>
        <input
          className="browser-default search"
          type="text"
          placeholder="Search"
        />
      </form>
      <ul className="white-text">
        <li>
          <a href="/profile" onClick={showProfile}>
            Profile
          </a>
        </li>
        <li>
          <a href="/settings" onClick={showSettings}>
            Settings
          </a>
        </li>
        <li>
          <a href="/#" className="logout" onClick={logoutHandler}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
