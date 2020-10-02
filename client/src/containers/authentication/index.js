import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import axios from "axios";

import { AuthenticationPage } from "../../components";
import { WEB_URL } from "../../configs";
import { loginAction } from "../../actions";

class Authentication extends Component {
  state = {
    error: "",
    signupFormData: {
      display: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    loginFormData: {
      loginEmail: "",
      loginPassword: "",
    },
  };

  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  emailRef = React.createRef();
  passwordRef = React.createRef();
  confirmPasswordRef = React.createRef();
  loginEmailRef = React.createRef();
  loginPasswordRef = React.createRef();

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

  submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { signupFormData } = this.state;
      const { history } = this.props;

      if (signupFormData.password === signupFormData.confirmPassword) {
        const data = await axios.post("/signup/api/v1", {
          firstName: signupFormData.firstName,
          lastName: signupFormData.lastName,
          email: signupFormData.email,
          password: signupFormData.password,
        });

        if (data) {
          M.toast({ html: "Account successfully created!" });
          this.clearFields();
          history.push(WEB_URL.HOMEPAGE);
        }
      } else {
        this.setState({
          error: "Password did not match!",
        });
      }
    } catch (error) {
      this.setState({
        error: error.response.data.error,
      });
      console.log("Signup-error:", error.response.data);
    }
  };

  loginSubmitHandler = async (e) => {
    e.preventDefault();

    const { loginFormData } = this.state;
    const { history } = this.props;

    try {
      const response = await axios.post("/login/api/v1", {
        email: loginFormData.loginEmail,
        password: loginFormData.loginPassword,
      });

      localStorage.setItem("User", JSON.stringify(response.data));

      this.props.login(response.data);

      history.push(WEB_URL.HOMEPAGE);
    } catch (error) {
      this.setState({
        error: error.response.data,
      });
      console.log("Login-error:", error.response.data);
    }
  };

  clearFields = () => {
    this.setState({
      error: "",
      signupFormData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
    console.log("Fields cleared");
  };

  createAccount = (e) => {
    e.preventDefault();

    const { signupFormData } = this.state;
    this.setState({
      error: "",
      signupFormData: { ...signupFormData, display: true },
    });
  };

  showLoginForm = (e) => {
    e.preventDefault();

    const { signupFormData } = this.state;
    this.setState({
      error: "",
      signupFormData: { ...signupFormData, display: false },
    });
  };

  resetPassword = (e) => {
    e.preventDefault();
  };

  render() {
    const { signupFormData, loginFormData, error } = this.state;
    return (
      <AuthenticationPage
        error={error}
        signupFormData={signupFormData}
        loginFormData={loginFormData}
        submitHandler={this.submitHandler}
        loginSubmitHandler={this.loginSubmitHandler}
        inputHandler={this.inputHandler}
        firstNameRef={this.firstNameRef}
        lastNameRef={this.lastNameRef}
        emailRef={this.emailRef}
        passwordRef={this.passwordRef}
        confirmPasswordRef={this.confirmPasswordRef}
        loginEmailRef={this.loginEmailRef}
        loginPasswordRef={this.loginPasswordRef}
        createAccount={this.createAccount}
        resetPassword={this.resetPassword}
        showLogin={this.showLoginForm}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginAction(user)),
  };
};

export default connect(null, mapDispatchToProps)(Authentication);
