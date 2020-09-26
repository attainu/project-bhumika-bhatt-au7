import React, { Component } from "react";
import axios from "axios";

import { NavbarLayout } from "../../components";
import { compareSync } from "bcryptjs";

class Navbar extends Component {
  state = {
    isProtected: this.props.isProtected,
    user: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      userName: "",
      country: "",
    },
  };

  logoutHandler = (e) => {
    e.preventDefault();

    const { history } = this.props;
    localStorage.clear();
    history.push("/");
  };

  getUserProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `profile/api/v2/${localStorage.getItem("id")}`
      );

      const { history } = this.props;

      if (response) {
        this.setState({
          user: {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            mobile: response.data.mobile,
            userName: response.data.userName,
            country: response.data.country,
          },
        });

        localStorage.setItem("User", JSON.stringify(response.data));
        history.push("/settings");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    const { isProtected } = this.state;
    return (
      <NavbarLayout
        isProtected={isProtected}
        logoutHandler={this.logoutHandler}
        getUserProfile={this.getUserProfile}
      />
    );
  }
}

export default Navbar;
