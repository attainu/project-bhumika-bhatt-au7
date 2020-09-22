import React from "react";
import { Button, Label, Form, FormGroup, Container } from "reactstrap";

import "./css/main.css";
import "./css/util.css";

const LoginPage = React.memo((props) => {
  const {
    error,
    emailRef,
    passwordRef,
    submitHandler,
    inputHandler,
    formData: { userEmail, userPassword },
  } = props;

  return (
    <Container>
      <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/animate/animate.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/css-hamburgers/hamburgers.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/animsition/css/animsition.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/select2/select2.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/daterangepicker/daterangepicker.css"
      />
      <link rel="stylesheet" type="text/css" href="css/util.css" />
      <link rel="stylesheet" type="text/css" href="css/main.css" />

      <Container className="limiter">
        <Container className="container-login100">
          <Container className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <Form
              className="login100-form validate-form flex-sb flex-w"
              onSubmit={submitHandler}
            >
              <span className="login100-form-title p-b-53">Login With</span>

              {error && <Label style={{ color: "red" }}>{error}</Label>}

              <a href="#" className="btn-face m-b-20">
                <i className="fa fa-facebook-official"></i>
                Facebook
              </a>

              <a href="#" className="btn-google m-b-20">
                <img src={require("./images/icons/icon-google.png")} />
                Google
              </a>

              <FormGroup
                className="wrap-input100 validate-input"
                data-validate="Email is required"
              >
                <input
                  className="input100"
                  id="email"
                  name="userEmail"
                  type="email"
                  ref={emailRef}
                  value={userEmail}
                  placeholder="Email"
                  onChange={inputHandler}
                />
                <span className="focus-input100"></span>
              </FormGroup>

              <FormGroup
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  id="password"
                  name="userPassword"
                  type="password"
                  ref={passwordRef}
                  value={userPassword}
                  placeholder="Password"
                  onChange={inputHandler}
                />
                <span className="focus-input100"></span>
              </FormGroup>

              <Container className="p-t-13 p-b-9">
                <a href="#" className="txt2 bo1 m-l-5">
                  Forgot password?
                </a>
              </Container>

              <Container className="container-login100-form-btn m-t-17">
                <Button className="login100-form-btn">Login</Button>
              </Container>

              <Container className="w-full text-center p-t-55">
                <span className="txt2">Not a member? </span>

                <a href="/signup" className="txt2 bo1">
                  Sign up now
                </a>
              </Container>
            </Form>
          </Container>
        </Container>
      </Container>

      <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
      <script src="vendor/animsition/js/animsition.min.js"></script>
      <script src="vendor/bootstrap/js/popper.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="vendor/select2/select2.min.js"></script>
      <script src="vendor/daterangepicker/moment.min.js"></script>
      <script src="vendor/daterangepicker/daterangepicker.js"></script>
      <script src="vendor/countdowntime/countdowntime.js"></script>
      <script src="js/main.js"></script>
    </Container>
  );
});

export default LoginPage;
