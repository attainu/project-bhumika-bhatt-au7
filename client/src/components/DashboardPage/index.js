import React from "react";
import { Container, Col } from "reactstrap";

import store from "../../store";

const DashboardPage = () => {
  const { login } = store.getState();
  const firstName = localStorage.getItem("firstName");
  return (
    <Container>
      <Col md="10">
        <h1>Hello {login.firstName || firstName}!</h1>
      </Col>
    </Container>
  );
};

export default DashboardPage;
