import React from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  TextInput,
  Container,
  Button,
} from "react-materialize";

import style from "./SettingsPage.module.css";

const SettingsPage = (props) => {
  const {
    error,
    firstName,
    lastName,
    email,
    userName,
    country,
    mobile,
    inputHandler,
    submitHandler,
    firstNameRef,
    lastNameRef,
    userNameRef,
    countryRef,
    mobileRef,
    changeName,
    editName,
    openForm,
  } = props;
  return (
    <Container>
      <Container>
        <Row>
          <Col s={10} l={4} m={6} offset="s1 m3 l4">
            <Card
              header={
                <CardTitle image="https://www.w3schools.com/w3images/avatar2.png"></CardTitle>
              }
            >
              {firstName + " " + lastName + " "}

              <a href="#" onClick={openForm}>
                Edit
              </a>
            </Card>
            {editName && (
              <form onSubmit={changeName} className={style.nameForm}>
                <TextInput
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  label="First name"
                  onChange={inputHandler}
                  ref={firstNameRef}
                  noLayout
                />
                <TextInput
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  label="Last Name"
                  onChange={inputHandler}
                  ref={lastNameRef}
                  noLayout
                />
                <Button small>Change name</Button>
              </form>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <form onSubmit={submitHandler}>
          <TextInput id="email" value={email} label="Email" readOnly />
          <TextInput
            id="username"
            name="userName"
            value={userName}
            label="Username"
            onChange={inputHandler}
            ref={userNameRef}
          />
          <TextInput
            id="country"
            name="country"
            value={country}
            label="Country"
            onChange={inputHandler}
            ref={countryRef}
          />
          <TextInput
            id="mobile"
            name="mobile"
            value={mobile}
            label="Mobile"
            onChange={inputHandler}
            ref={mobileRef}
          />
          <Button type="submit">Save</Button>
        </form>
      </Container>
    </Container>
  );
};

export default SettingsPage;
