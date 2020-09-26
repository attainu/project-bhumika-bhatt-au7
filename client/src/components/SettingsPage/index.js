import React from "react";
import { Row, Col, Card, CardTitle, TextInput } from "react-materialize";

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
  } = props;
  return (
    <div>
      <div className={style.profilePic}>
        <Row>
          <Col>
            <Card
              header={
                <CardTitle image="https://materializecss.com/images/sample-1.jpg"></CardTitle>
              }
              title={firstName + " " + lastName}
            ></Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <TextInput
          id="TextInput-4"
          value={email}
          label="Email"
          error={error}
          success="Email successfully changed!"
          validate
        />
        <TextInput id="TextInput-4" value={userName} label="Username" />
        <TextInput id="TextInput-4" value={country} label="Country" />
        <TextInput id="TextInput-4" value={mobile} label="Mobile" />
      </div>
    </div>
  );
};

export default SettingsPage;
