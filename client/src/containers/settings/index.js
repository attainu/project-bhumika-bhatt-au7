import React, { Component } from "react";

import { SettingsPage } from "../../components";

class Settings extends Component {
  localStorageData = localStorage.getItem("User");

  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      userName: "",
      country: "",
    },
  };

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { signupFormData, loginFormData } = this.state;
    this.setState({
      error: "",
      signupFormData: { ...signupFormData, [name]: value },
      loginFormData: { ...loginFormData, [name]: value },
    });
  };

  render() {
    const user = JSON.parse(localStorage.getItem("User"));
    return (
      <SettingsPage
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        userName={user.userName}
        country={user.country}
        mobile={user.mobile}
      />
    );
  }
}

export default Settings;
