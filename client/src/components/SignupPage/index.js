import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import classes from "./SignupPage.module.css";
import LoginImage from "../../assets/images/Home-Page-login.jpg";

const SignupPage = (props) => {
  const {
    error,
    submitHandler,
    inputHandler,
    formdata: { firstName, lastName, email, password, confirmPassword },
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
        <img src={LoginImage} alt="social Media" />
      </div>
    </div>
  );
};

export default SignupPage;
