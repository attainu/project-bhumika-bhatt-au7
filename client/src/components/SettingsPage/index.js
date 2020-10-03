import React from "react";
import { Row, Col, TextInput, Button, RadioGroup } from "react-materialize";

import "./style.css";

const SettingsPage = (props) => {
  const {
    error,
    formData: {
      firstName,
      lastName,
      email,
      userName,
      country,
      mobile,
      password,
      newPassword,
      confirmPassword,
      image,
      gender,
    },
    inputHandlerFile,
    inputHandler,
    submitHandler,
    firstNameRef,
    lastNameRef,
    userNameRef,
    countryRef,
    mobileRef,
    passwordRef,
    newPasswordRef,
    confirmPasswordRef,
    selectTab,
    showPasswordForm,
    changePassword,
  } = props;

  return (
    <Row>
      <Col style={{ width: "100%" }}>
        <Col className="tabsCol l2 m3" offset="l3 m1">
          <a
            id="editProfile"
            href="/editProfile"
            className="tab tabActive grey-text text-darken-3"
            onClick={selectTab}
          >
            Edit Profile
          </a>
          <a
            id="changePassword"
            href="/changePassword"
            className="tab grey-text text-darken-3"
            onClick={selectTab}
          >
            Change Password
          </a>
        </Col>
        <Col className="form l4 m6" offset="">
          <div className="dp">
            <img id="dp2" src={image} alt={userName}></img>
            <span>Email: {email}</span>
          </div>
          <label className="edit" htmlFor="upload">
            CHANGE IMAGE
          </label>
          <input id="upload" type="file" onChange={inputHandlerFile}></input>

          {!showPasswordForm ? (
            <form onSubmit={submitHandler}>
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

              <TextInput
                id="username"
                name="userName"
                value={userName}
                label="Username"
                onChange={inputHandler}
                ref={userNameRef}
                noLayout
              />
              <TextInput
                id="country"
                name="country"
                value={country}
                label="Country"
                onChange={inputHandler}
                ref={countryRef}
                noLayout
              />
              <TextInput
                id="mobile"
                name="mobile"
                value={mobile}
                label="Mobile"
                onChange={inputHandler}
                ref={mobileRef}
                noLayout
              />
              <RadioGroup
                radioClassNames="gender"
                withGap
                label="Gender"
                name="gender"
                value={gender}
                onChange={inputHandler}
                options={[
                  {
                    label: "Male",
                    value: "male",
                  },
                  {
                    label: "Female",
                    value: "female",
                  },
                ]}
              ></RadioGroup>
              <div className="error">
                <span>{error}</span>
              </div>
              <Button waves="purple" className="botton2 purple darken-2">
                Save Details
              </Button>
            </form>
          ) : (
            <form onSubmit={changePassword}>
              <TextInput
                id="password"
                type="password"
                name="password"
                value={password}
                label="Current Password"
                onChange={inputHandler}
                ref={passwordRef}
                noLayout
              />
              <TextInput
                id="newPassword"
                type="password"
                name="newPassword"
                value={newPassword}
                label="New Password"
                onChange={inputHandler}
                ref={newPasswordRef}
                noLayout
              />
              <TextInput
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                label="Confirm Password"
                onChange={inputHandler}
                ref={confirmPasswordRef}
                noLayout
              />
              <div className="error">
                <span>{error}</span>
              </div>
              <Button className="botton2 purple darken-2">Save Password</Button>
            </form>
          )}
        </Col>
      </Col>
    </Row>
  );
};

export default SettingsPage;
