import React, { Component } from "react";
import axios from "axios";

import { NavbarLayout } from "../../components";
import WEB_URL from "../../configs/webUrl";

class Navbar extends Component {
  state = {
    searchedUser: null,
  };
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchedUser !== this.state.searchedUser) {
  //     this.search();
  //   }
  // }

  logoutHandler = (e) => {
    e.preventDefault();

    const { history } = this.props;
    localStorage.clear();
    history.push(WEB_URL.HOMEPAGE);
  };

  search = async (e) => {
    e.preventDefault();
    let query = e.target.value;
    try {
      const user = await axios.post("user/search", {
        query,
      });
      console.log(user.data);
      this.setState({ searchedUser: user.data });
    } catch (error) {}
  };

  closeSearchBar = () => {
    this.setState({ searchedUser: null });
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
        userInfo={this.state.searchedUser}
      />
    );
  }
}

export default Navbar;
