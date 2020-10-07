import React from "react";
import { TextInput, Button, Container, Row, Col } from "react-materialize";

const ResetPassword = (props) => {
  const {
    error,
    inputHandler,
    resetSubmitHandler,
    resetFormData: { password, confirmPassword },
    passwordRef,
    confirmPasswordRef,
  } = props;

  return (
    <Container>
      <Row className="cont">
        <Col className="hide-on-med-and-down brand" key={0} m={6}>
          <div>
            <span>connectX</span>
          </div>
        </Col>
        ,
        <Col key={1} s={12} m={6} l={5} offset="m3 l1">
          <div className="hide-on-large-only brandMobile">
            <span>connectX</span>
          </div>
          <form className="login" onSubmit={resetSubmitHandler}>
            <TextInput
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={inputHandler}
              label="Password"
              ref={passwordRef}
              required
              autoFocus
              s={12}
            />
            <TextInput
              type="password"
              id="passowrd"
              name="confirmPassword"
              value={confirmPassword}
              onChange={inputHandler}
              label="Confirm Password"
              ref={confirmPasswordRef}
              required
              autoFocus
              s={12}
            />
            <div className="error">
              <span>{error}</span>
            </div>
            <Button waves="purple" className="button purple darken-2">
              Reset Password
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
