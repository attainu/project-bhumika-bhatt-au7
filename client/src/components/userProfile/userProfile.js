import React from "react";
import { Row, Col, ProgressBar } from "react-materialize";

import "./style.css";

const userProfile = (props) => {
  const { posts, show } = props;
  return (
    <Row>
      {!props.user ? (
        <Col s={10} offset="s1">
          <ProgressBar className="purple" />
        </Col>
      ) : (
        <Col s={12} m={8} l={6} offset="m2 l3">
          <div className="dp">
            <img
              id="dp2"
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt={props.user.userName}
            ></img>
            <span>@{props.user.userName}</span>
          </div>
          {show ? (
            <button
              className="btn waves-effect waves-light blue darker larger"
              onClick={() => props.follow()}
            >
              Follow
            </button>
          ) : (
            <button
              className="btn waves-effect waves-light blue darker larger"
              onClick={() => props.unfollow()}
            >
              UnFollow
            </button>
          )}

          <div className="userConnection">
            {posts || 0} Posts || {props.user.followers.length}followers ||{" "}
            {props.user.following.length} Following
          </div>
          <Row>
            <div className="posts center-align">
              <Col>
                <img
                  className="post3"
                  src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                  alt={props.user.userName}
                ></img>
                <img
                  className="post3"
                  src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                  alt={props.user.userName}
                ></img>
                <img
                  className="post3"
                  src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                  alt={props.user.userName}
                ></img>
              </Col>
            </div>
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default userProfile;
