import React, { Component } from "react";

import { NavbarLayout } from "../../components";
import WEB_URL from "../../configs/webUrl";

class Navbar extends Component {
  logoutHandler = (e) => {
    e.preventDefault();

    const { history } = this.props;
    localStorage.clear();
    history.push(WEB_URL.HOMEPAGE);
  };

  search = (e) => {
    e.preventDefault();
  };

  showHomepage = (e) => {
    e.preventDefault();

    const { history } = this.props;
    history.push(WEB_URL.HOMEPAGE);
  };
  showProfile = (e) => {
    e.preventDefault();

    const { history } = this.props;
    history.push(WEB_URL.PROFILE);
  };
  showSettings = (e) => {
    e.preventDefault();

    const { history } = this.props;
    history.push(WEB_URL.SETTINGS);
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
