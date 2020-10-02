import React, { Component } from "react";

import { NavbarLayout } from "../../components";

class Navbar extends Component {
  logoutHandler = (e) => {
    e.preventDefault();

    const { history } = this.props;
    localStorage.clear();
    history.push("/");
  };

  search = (e) => {
    e.preventDefault();
  };

  showHomepage = (e) => {
    e.preventDefault();

    const { history } = this.props;
    history.push("/");
  };
  showProfile = (e) => {
    e.preventDefault();

    const { history } = this.props;
    history.push("/profile");
  };
  showSettings = (e) => {
    e.preventDefault();

    const { history } = this.props;
    history.push("/settings");
  };

  render() {
    return (
      <NavbarLayout
        logoutHandler={this.logoutHandler}
        showHomepage={this.showHomepage}
        showSettings={this.showSettings}
        showProfile={this.showProfile}
        search={this.search}
      />
    );
  }
}

export default Navbar;
