import React from "react";
import { TextInput, Button } from "react-materialize";

import classes from "./AuthenticationPage.module.css";
// import LoginImage from "../../assets/images/Home-Page-login.jpg";

const AuthenticationPage = (props) => {
  const {
    // error,
    submitHandler,
    inputHandler,
    signupFormData: { firstName, lastName, email, password, confirmPassword },
    loginFormData: { loginPassword, loginEmail },
    loginEmailRef,
    loginPasswordRef,
    loginSubmitHandler,
    // loginError,
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
  } = props;

  return (
    <div className={classes.Container}>
      {/* {error && <Label>{error}</Label>} */}
      <form className={classes.Form} onSubmit={submitHandler}>
        <div>
          <TextInput
            className={classes.Input}
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={inputHandler}
            placeholder="First name"
            ref={firstNameRef}
            required
          />
        </div>
        <div>
          <TextInput
            className={classes.TextInput}
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={inputHandler}
            placeholder="Last name"
            ref={lastNameRef}
          />
        </div>
        <div>
          <TextInput
            className={classes.TextInput}
            id="email"
            name="email"
            value={email}
            onChange={inputHandler}
            placeholder="Email"
            ref={emailRef}
            required
          />
        </div>
        <div>
          <TextInput
            className={classes.TextInput}
            id="password"
            name="password"
            value={password}
            onChange={inputHandler}
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        <div>
          <TextInput
            className={classes.TextInput}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={inputHandler}
            placeholder="Confirm password"
            ref={confirmPasswordRef}
            required
          />
        </div>
        <div>
          <Button type="submit">Signup</Button>
        </div>
      </form>
      <div className={classes.LoginImage}>
        {/* <img src={LoginImage} alt="social Media" /> */}
        {/* {loginError && <Label>{loginError}</Label>} */}
        <form className={classes.login} onSubmit={loginSubmitHandler}>
          <div>
            <TextInput
              className={classes.TextInput}
              id="email"
              name="loginEmail"
              value={loginEmail}
              onChange={inputHandler}
              placeholder="Email"
              ref={loginEmailRef}
              required
              autoFocus
            />
          </div>
          <div>
            <TextInput
              className={classes.TextInput}
              id="password"
              name="loginPassword"
              value={loginPassword}
              onChange={inputHandler}
              placeholder="Password"
              ref={loginPasswordRef}
              required
            />
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
