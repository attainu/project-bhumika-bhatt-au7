import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

import { SettingsPage } from "../../components";
import { WEB_URL } from "../../configs";

class Settings extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      userName: "",
      country: "",
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    showPasswordForm: false,
  };

  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  userNameRef = React.createRef();
  countryRef = React.createRef();
  mobileRef = React.createRef();
  passwordRef = React.createRef();
  newPasswordRef = React.createRef();
  confirmPasswordRef = React.createRef();

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile = async (e) => {
    try {
      const response = await axios.get(
        `profile/api/v2/${JSON.parse(localStorage.getItem("User"))._id}`
      );

      if (response) {
        this.setState({
          user: {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            mobile: response.data.mobile,
            userName: response.data.userName,
            country: response.data.country,
            password: "",
            newPassword: "",
            confirmPassword: "",
          },
        });
        const user = {
          ...response.data,
          token: JSON.parse(localStorage.getItem("User")).token,
        };

        localStorage.setItem("User", JSON.stringify(user));
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { user } = this.state;
    this.setState({
      error: "",
      user: { ...user, [name]: value },
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { user } = this.state;
      const { history } = this.props;

      const response = await axios.patch("/profile/api/v3", {
        _id: JSON.parse(localStorage.getItem("User"))._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        country: user.country,
        mobile: user.mobile,
      });

      if (response) {
        M.toast({ html: "User details successfully updated!" });
        history.push(WEB_URL.SETTINGS);
      }
    } catch (error) {
      M.toast({ html: error.response });
      console.log("Error-updateUser:", error.response);
    }
  };

  selectTab = (e) => {
    e.preventDefault();
    let current = document.getElementsByClassName("tabActive");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" tabActive", "");
    }
    e.currentTarget.className += " tabActive";

    if (e.currentTarget.id === "changePassword") {
      this.setState({
        showPasswordForm: true,
      });
    } else {
      this.setState({
        showPasswordForm: false,
      });
    }
  };

  changePassword = async (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { history } = this.props;

    if (user.newPassword === user.confirmPassword) {
      try {
        const response = await axios.patch("/profile/api/v4", {
          _id: JSON.parse(localStorage.getItem("User"))._id,
          password: user.newPassword,
        });

        if (response) {
          M.toast({ html: "User password successfully updated!" });
          history.push(WEB_URL.SETTINGS);
          this.setState({
            user: {
              ...user,
              password: "",
              newPassword: "",
              confirmPassword: "",
            },
          });
        }
      } catch (error) {
        M.toast({ html: error.response });
        console.log("Error-updatePassword:", error.response);
      }
    }
  };

  render() {
    const { user, showPasswordForm } = this.state;

    return (
      <SettingsPage
        formData={user}
        showPasswordForm={showPasswordForm}
        submitHandler={this.submitHandler}
        inputHandler={this.inputHandler}
        changePassword={this.changePassword}
        firstNameRef={this.firstNameRef}
        lastNameRef={this.lastNameRef}
        userNameRef={this.userNameRef}
        countryRef={this.countryRef}
        mobileRef={this.mobileRef}
        passwordRef={this.passwordRef}
        newPasswordRef={this.newPasswordRef}
        confirmPasswordRef={this.confirmPasswordRef}
        selectTab={this.selectTab}
      />
    );
  }
}

export default Settings;
