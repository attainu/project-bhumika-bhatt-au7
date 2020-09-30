import React from "react";
import { Navbar, Icon, Dropdown, Divider } from "react-materialize";

import "./style.css";
import Sidenav from "./sidenav";

const navbar = (props) => {
  const {
    showHomepage,
    showProfile,
    showSettings,
    logoutHandler,
    search,
  } = props;
  const user = JSON.parse(localStorage.getItem("User")).user;
  return (
    <Navbar
      centerChildren
      alignLinks="right"
      brand={
        <a href="/" className="brand-logo" onClick={showHomepage}>
          connectX
        </a>
      }
      centerChildren
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
      className="purple darken-3"
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
      <form onSubmit={search}>
        <input
          className="browser-default search"
          type="text"
          placeholder="Search"
        />
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
        <Divider />
        <a href="/#" onClick={logoutHandler}>
          Logout
        </a>
      </Dropdown>
    </Navbar>
  );
};

export default navbar;
