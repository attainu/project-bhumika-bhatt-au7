import React, { Component } from "react";
import { LoginPage } from "../../components";
import { USER_DATA, WEB_URL } from "../../config";
import { connect } from "react-redux";
import { loginAction } from "../../actions";

class Login extends Component {
  state = {
    error: "",
    formData: {
      user_email: "",
      user_password: "",
    },
  };

  emailRef = React.createRef();
  passwordRef = React.createRef();

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { formData } = this.state;

    this.setState({
      error: "",
      formData: { ...formData, [name]: value },
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    const { formData } = this.state;
    const { history } = this.props;

    const userData = {
      email: formData.user_email,
      password: formData.user_password,
    };

    try {
      const user = await USER_DATA.getData(userData);

      localStorage.setItem("accessToken", true);
      localStorage.setItem("user_name", user.name);
      localStorage.setItem("user_email", user.email);

      this.props.login(user);

      history.push(WEB_URL.DASHBOARD);
      console.log(history);
    } catch (error) {
      this.setState({ error: error.message });
      console.log("Error:", error.message);
    }
  };

  render() {
    const { formData, error } = this.state;

    return (
      <LoginPage
        error={error}
        formData={formData}
        submitHandler={this.submitHandler}
        inputHandler={this.inputHandler}
        emailRef={this.emailRef}
        passwordRef={this.passwordRef}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginAction(user)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
