import React from "react";
import { Row, Col, Card, CardTitle, Icon } from "react-materialize";

import style from "./SettingsPage.module.css";

const SettingsPage = (props) => {
  const { firstName, lastName } = props;
  return (
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
  );
};

export default SettingsPage;
