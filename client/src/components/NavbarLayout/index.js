import React from "react";
import { Navbar, Icon, Dropdown, Divider } from "react-materialize";

const navbar = (props) => {
  const { isProtected, logoutHandler, getUserProfile } = props;
  return (
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="/">
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
    >
      {isProtected && (
        <Dropdown
          id="account"
          options={{
            alignment: "left",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
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
              Account <Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <a href="/profile">Profile</a>
          <a href="/settings" onClick={getUserProfile}>
            Settings
          </a>
          <Divider />
          <a href="/#" onClick={logoutHandler}>
            Logout
          </a>
        </Dropdown>
      )}
    </Navbar>
  );
};

export default navbar;
