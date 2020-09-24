import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import classes from "./AuthenticationPage.module.css";
// import LoginImage from "../../assets/images/Home-Page-login.jpg";

const AuthenticationPage = (props) => {
  const {
    error,
    submitHandler,
    inputHandler,
    signupFormData: { firstName, lastName, email, password, confirmPassword },
    loginFormData: { loginPassword, loginEmail },
    loginEmailRef,
    loginPasswordRef,
    loginSubmitHandler,
    loginError,
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
  } = props;

  return (
    <div className={classes.Container}>
      {error && <Label>{error}</Label>}
      <Form className={classes.Form} onSubmit={submitHandler}>
        <FormGroup>
          <Input
            className={classes.Input}
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={inputHandler}
            placeholder="First name"
            ref={firstNameRef}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className={classes.Input}
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={inputHandler}
            placeholder="Last name"
            ref={lastNameRef}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className={classes.Input}
            id="email"
            name="email"
            value={email}
            onChange={inputHandler}
            placeholder="Email"
            ref={emailRef}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className={classes.Input}
            id="password"
            name="password"
            value={password}
            onChange={inputHandler}
            placeholder="Password"
            ref={passwordRef}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className={classes.Input}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={inputHandler}
            placeholder="Confirm password"
            ref={confirmPasswordRef}
          />
        </FormGroup>
        <div>
          <Button type="submit">Signup</Button>
        </div>
      </Form>
      <div className={classes.LoginImage}>
        {/* <img src={LoginImage} alt="social Media" /> */}
        {loginError && <Label>{loginError}</Label>}
        <Form className={classes.login} onSubmit={loginSubmitHandler}>
          <FormGroup>
            <Input
              className={classes.Input}
              id="email"
              name="loginEmail"
              value={loginEmail}
              onChange={inputHandler}
              placeholder="Email"
              ref={loginEmailRef}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className={classes.Input}
              id="password"
              name="loginPassword"
              value={loginPassword}
              onChange={inputHandler}
              placeholder="Password"
              ref={loginPasswordRef}
            />
          </FormGroup>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
