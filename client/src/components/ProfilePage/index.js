import React from "react";
import { Row, Col, ProgressBar } from "react-materialize";

import "./style.css";

const profilePage = (props) => {
  const { userName, posts } = props;
  return (
    <Row>
      <Col s={12} m={8} l={6} offset="m2 l3">
        <div className="dp">
          <img
            id="dp2"
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt={userName}
          ></img>
          <span>@{userName}</span>
        </div>

        <div className="userConnection">
          {posts || 0} Posts || {0} Followers || {0} Following
        </div>
        <Row>
          <div className="posts center-align">
            <Col>
              <img
                className="post3"
                src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt={userName}
              ></img>
              <img
                className="post3"
                src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt={userName}
              ></img>
              <img
                className="post3"
                src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt={userName}
              ></img>
            </Col>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default profilePage;
