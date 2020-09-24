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
          M.toast({ html: data.data.message });
          this.clearFields();
          history.push(WEB_URL.HOMEPAGE);
          console.log(data);
        }
      } else {
        M.toast({ html: "Password did not match!" });
      }
    } catch (error) {
      M.toast({ html: error.response.data.error });
      console.log("Error:", error.response.data);
    }
  };

  clearFields = () => {
    this.setState({
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

  loginSubmitHandler = async (e) => {
    e.preventDefault();

    const { loginFormData } = this.state;
    const { history } = this.props;

    try {
      const response = await axios.post("/login/api/v1", {
        email: loginFormData.loginEmail,
        password: loginFormData.loginPassword,
      });

      localStorage.setItem("id", response.data._id);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("firstName", response.data.firstName);

      this.props.login(response.data);

      history.push(WEB_URL.HOMEPAGE);
    } catch (error) {
      M.toast({ html: error.response.data });
      console.log("Error:", error.response.data);
      // this.setState({ error: error.response.data });
    }
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
