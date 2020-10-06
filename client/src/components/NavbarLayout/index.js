import React from "react";
import { Navbar, Icon, Dropdown } from "react-materialize";
import { Link } from "react-router-dom";

import "./style.scss";
import Sidenav from "./sidenav";

const navbar = (props) => {
  const {
    showHomepage,
    showProfile,
    showSettings,
    logoutHandler,
    search,
    close,
    userInfo,
  } = props;
  const user = JSON.parse(localStorage.getItem("User"));
  return (
    <Navbar
      fixed={window.innerWidth < 993}
      centerChildren
      alignLinks="right"
      brand={
        <a href="/" className="brand-logo" onClick={showHomepage}>
          connectX
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
      className="purple darken-3 isFixed"
      sidenav={
        <Sidenav
          logoutHandler={logoutHandler}
          showHomepage={showHomepage}
          showSettings={showSettings}
          showProfile={showProfile}
          search={search}
        />
      }
    >
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

      <Dropdown
        id="Dropdown_6"
        options={{
          alignment: "right",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: false,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        }}
        trigger={
          <a href="/#">
            {user.firstName} <Icon right>arrow_drop_down</Icon>
          </a>
        }
      >
        <a href="/profile" onClick={showProfile}>
          Profile
        </a>
        <a href="/settings#" onClick={showSettings}>
          Settings
        </a>
        <a id="logout" href="/#" onClick={logoutHandler}>
          Logout
        </a>
      </Dropdown>
    </Navbar>
  );
};

export default navbar;
