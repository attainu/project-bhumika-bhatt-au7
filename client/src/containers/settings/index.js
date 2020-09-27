import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

import { SettingsPage } from "../../components";
import { WEB_URL } from "../../configs";

class Settings extends Component {
  localStorageData = JSON.parse(localStorage.getItem("User"));

  state = {
    user: {
      id: this.localStorageData._id,
      firstName: this.localStorageData.firstName,
      lastName: this.localStorageData.lastName,
      email: this.localStorageData.email,
      mobile: this.localStorageData.mobile,
      userName: this.localStorageData.userName,
      country: this.localStorageData.country,
    },
    editName: false,
  };

  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  userNameRef = React.createRef();
  countryRef = React.createRef();
  mobileRef = React.createRef();

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile = async (e) => {
    try {
      const response = await axios.get(
        `profile/api/v2/${localStorage.getItem("id")}`
      );
      console.log(response.data);

      if (response) {
        this.setState({
          user: {
            id: response.data._id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            mobile: response.data.mobile,
            userName: response.data.userName,
            country: response.data.country,
          },
        });

        localStorage.setItem("User", JSON.stringify(response.data));
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

  openForm = (e) => {
    e.preventDefault();

    this.setState({
      editName: true,
    });
  };

  changeName = async (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { history } = this.props;

    try {
      const response = await axios.patch("/profile/api/v3", {
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        country: user.country,
        mobile: user.mobile,
      });

      if (response) {
        M.toast({ html: response.data });
        this.setState({
          editName: false,
        });
        history.push(WEB_URL.SETTINGS);
        console.log(response.data);
      }
    } catch (error) {
      M.toast({ html: error.response });
      console.log("Error:", error.response);
    }
  };

  submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { user } = this.state;
      const { history } = this.props;
      console.log(user);

      const response = await axios.patch("/profile/api/v3", {
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        country: user.country,
        mobile: user.mobile,
      });

      if (response) {
        M.toast({ html: response.data });
        history.push(WEB_URL.SETTINGS);
        console.log(response.data);
      }
    } catch (error) {
      M.toast({ html: error.response });
      console.log("Error:", error.response);
    }
  };

  render() {
    const { user, editName } = this.state;

    return (
      <SettingsPage
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        userName={user.userName}
        country={user.country}
        mobile={user.mobile}
        submitHandler={this.submitHandler}
        inputHandler={this.inputHandler}
        firstNameRef={this.firstNameRef}
        lastNameRef={this.lastNameRef}
        userNameRef={this.userNameRef}
        countryRef={this.countryRef}
        mobileRef={this.mobileRef}
        editName={editName}
        changeName={this.changeName}
        openForm={this.openForm}
      />
    );
  }
}

export default Settings;
