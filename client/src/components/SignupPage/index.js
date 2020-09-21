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
          <Label for="firstName">First name</Label>
          <Input
            className={classes.Input}
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={inputHandler}
            placeholder="Enter your first name"
            ref={firstNameRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input
            className={classes.Input}
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={inputHandler}
            placeholder="Enter your last name"
            ref={lastNameRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            className={classes.Input}
            id="email"
            name="email"
            value={email}
            onChange={inputHandler}
            placeholder="Enter your email id"
            ref={emailRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            className={classes.Input}
            id="password"
            name="password"
            value={password}
            onChange={inputHandler}
            placeholder="Enter a passwrod"
            ref={passwordRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm password</Label>
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
        <img src={LoginImage} alt="social Media Image" />
      </div>
    </div>
  );
};

export default SignupPage;
