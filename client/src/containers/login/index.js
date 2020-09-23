import React, { Component } from "react";
import { LoginPage } from "../../components";
import { WEB_URL } from "../../configs";
import { connect } from "react-redux";
import { loginAction } from "../../actions";
import axios from "axios";

class Login extends Component {
  state = {
    error: "",
    formData: {
      userEmail: "",
      userPassword: "",
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

    try {
      const response = await axios.post("http://localhost:5000/login/api/v1", {
        email: formData.userEmail,
        password: formData.userPassword,
      });

      localStorage.setItem("id", response.data._id);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("firstName", response.data.firstName);

      this.props.login(response.data);

      history.push("/");
    } catch (error) {
      this.setState({ error: error.response.data });
      console.log("Error:", error.response.data);
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
