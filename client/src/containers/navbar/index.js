import React, { Component } from "react";
import axios from "axios";

import { NavbarLayout } from "../../components";
import WEB_URL from "../../configs/webUrl";

class Navbar extends Component {
  state = {
    searchedUser: null,
    searchView: false,
    searchValue: "",
  };

  logoutHandler = (e) => {
    e.preventDefault();

    const { history } = this.props;
    localStorage.clear();
    history.push(WEB_URL.HOMEPAGE);
  };

  inputHander = (e) => {
    const value = e.target.value;
    this.setState({
      searchValue: value,
    });
    if (value !== "") {
      this.setState({
        searchView: true,
      });
      this.search(value);
    } else {
      this.setState({
        searchView: false,
      });
    }
  };

  search = async (query) => {
    try {
      const user = await axios.post("/user/search", {
        query,
      });
      if (user) {
        this.setState({ searchedUser: user.data });
      }
    } catch (error) {}
  };

  closeSearch = () => {
    this.setState({
      searchValue: "",
    });
    setTimeout(() => {
      this.setState({
        searchView: false,
      });
    }, 1000);
  };

  closeSearchBar = () => {
    this.setState({ searchedUser: null, searchView: false, searchValue: "" });
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
        search={this.inputHander}
        userInfo={this.state.searchedUser}
        closeSearch={this.closeSearch}
        searchView={this.state.searchView}
        searchValue={this.state.searchValue}
        close={this.closeSearchBar}
      />
    );
  }
}

export default Navbar;
