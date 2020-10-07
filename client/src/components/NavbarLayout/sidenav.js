import React from "react";
import { Card, CardTitle } from "react-materialize";
import { Link } from "react-router-dom";

import "./style.scss";

const Sidenav = (props) => {
  const {
    showProfile,
    showSettings,
    logoutHandler,
    search,
    close,
    userInfo,
  } = props;
  const user = JSON.parse(localStorage.getItem("User"));

  return (
    <div>
      <Card id="dp" header={<CardTitle image={user.image}></CardTitle>}>
        {"@" + user.userName}
      </Card>
      <form>
        <input
          className="browser-default search"
          type="text"
          placeholder="Search"
          onChange={search}
        />
        <div className="collection">
          {userInfo
            ? userInfo.map((item) => {
                return (
                  <div key={item._id}>
                    <Link
                      to={
                        item._id === user._id
                          ? `/profile`
                          : `/profile/${item._id}`
                      }
                      className="collection-item"
                      onClick={close}
                    >
                      {item.email}
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
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
