import React, { Component } from "react";
import M from "materialize-css";
import axios from "axios";

import { ResetPage } from "../../components";
import { WEB_URL } from "../../configs";

class ResetPassword extends Component {
  state = {
    error: "",
    resetFormData: {
      password: "",
      confirmPassword: "",
    },
  };

  passwordRef = React.createRef();
  confirmPasswordRef = React.createRef();

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { resetFormData } = this.state;
    this.setState({
      error: "",
      resetFormData: { ...resetFormData, [name]: value },
    });
  };

  resetSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { token } = this.props.computedMatch.params;
      const { resetFormData } = this.state;
      const { history } = this.props;
      if (resetFormData.password === resetFormData.confirmPassword) {
        const response = await axios.post("/login/newPassword", {
          resetToken: token,
          password: resetFormData.password,
        });
        console.log(response.data);
        M.toast({ html: response.data.message });
        history.push(WEB_URL.AUTHENTICATION);
      }
    } catch (error) {
      this.setState({
        error: error.response.data,
      });
      console.log("Login-error:", error.response.data);
    }
  };

  render() {
    const { resetFormData, error } = this.state;
    return (
      <ResetPage
        error={error}
        resetFormData={resetFormData}
        resetSubmitHandler={this.resetSubmitHandler}
        inputHandler={this.inputHandler}
        EmailRef={this.EmailRef}
      />
    );
  }
}

export default ResetPassword;
