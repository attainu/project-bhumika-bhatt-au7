import React, { Component } from "react";

import { NavbarLayout } from "../../components";

class Navbar extends Component {
  state = {
    isProtected: this.props.isProtected,
  };

  logoutHandler = (e) => {
    e.preventDefault();

    const { history } = this.props;
    localStorage.clear();
    history.push("/");
  };

  render() {
    const { isProtected } = this.state;
    return (
      <NavbarLayout
        isProtected={isProtected}
        logoutHandler={this.logoutHandler}
      />
    );
  }
}

export default Navbar;
