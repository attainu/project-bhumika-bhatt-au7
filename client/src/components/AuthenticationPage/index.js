import React from "react";
import { TextInput, Button, Container, Row, Col } from "react-materialize";

import style from "./AuthenticationPage.module.css";

const AuthenticationPage = (props) => {
  const {
    error,
    submitHandler,
    inputHandler,
    signupFormData: {
      display,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    },
    loginFormData: { loginPassword, loginEmail },
    loginEmailRef,
    loginPasswordRef,
    loginSubmitHandler,
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    createAccount,
    resetPassword,
    showLogin,
  } = props;

  return (
    <Container>
      <Row className={style.test}>
        {display ? (
          <Col s={12} m={8} l={6} offset="m2 l3">
            <div className={style.brandMobile}>
              <span className="hide-on-large-only">connectX</span>
            </div>
            <div className={style.brand}>
              <span className="hide-on-med-and-down">connectX</span>
            </div>
            <form className={style.signup} onSubmit={submitHandler}>
              <Col s={12}>
                <TextInput
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={inputHandler}
                  label="First name"
                  ref={firstNameRef}
                  autoFocus
                  required
                  s={12}
                  m={6}
                />
                <TextInput
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={inputHandler}
                  label="Last name"
                  ref={lastNameRef}
                  s={12}
                  m={6}
                />
              </Col>
              <Col s={12}>
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={inputHandler}
                  label="Email"
                  ref={emailRef}
                  required
                  s={12}
                />
              </Col>
              <Col s={12}>
                <TextInput
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={inputHandler}
                  label="Password"
                  ref={passwordRef}
                  required
                  s={12}
                  m={6}
                />
                <TextInput
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={inputHandler}
                  label="Confirm password"
                  ref={confirmPasswordRef}
                  required
                  error={error}
                  s={12}
                  m={6}
                />
              </Col>
              <div className={style.error}>
                <span>{error}</span>
              </div>
              <Button waves="green" className={style.button}>
                Create account
              </Button>
              <div className={style.showLogin}>
                Already have an account?{" "}
                <a href="#" onClick={showLogin}>
                  Login
                </a>
              </div>
            </form>
          </Col>
        ) : (
          [
            <Col key={0} className="hide-on-med-and-down" m={6}>
              <div className={style.brand}>
                <span>connectX</span>
              </div>
            </Col>,
            <Col key={1} s={12} m={6} l={5} offset="m3 l1">
              <div className={style.brandMobile}>
                <span className="hide-on-large-only">connectX</span>
              </div>
              <form className={style.login} onSubmit={loginSubmitHandler}>
                <TextInput
                  type="email"
                  id="email"
                  name="loginEmail"
                  value={loginEmail}
                  onChange={inputHandler}
                  label="Email"
                  ref={loginEmailRef}
                  required
                  autoFocus
                  s={12}
                />
                <TextInput
                  type="password"
                  id="password"
                  name="loginPassword"
                  value={loginPassword}
                  onChange={inputHandler}
                  label="Password"
                  ref={loginPasswordRef}
                  required
                  s={12}
                />
                <div className={style.link}>
                  <a href="#" onClick={resetPassword}>
                    Forgot password?
                  </a>
                </div>
                <div className={style.error}>
                  <span>{error}</span>
                </div>
                <Button waves="green" className={style.button}>
                  Login
                </Button>
                <Button
                  waves="green"
                  className={style.button}
                  onClick={createAccount}
                >
                  Create account
                </Button>
              </form>
            </Col>,
          ]
        )}
      </Row>
    </Container>
  );
};

export default AuthenticationPage;
