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
              src={props.user.image}
              alt={props.user.userName}
            ></img>
            <span>@{props.user.userName}</span>
          </div>
          <div className="userConnection">
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
            <span style={{ margin: "5px 0 0 10px" }}>
              {(posts && posts.length) || 0} Posts ||{" "}
              {props.user.followers.length} followers ||{" "}
              {props.user.following.length} Following
            </span>
          </div>
          <Row>
            <div className="postsUser center-align">
              <Col>
                {console.log(props.posts)}
                {!props.posts ? (
                  <Col s={10} offset="s1">
                    <ProgressBar className="purple" />
                  </Col>
                ) : (
                  props.posts.map((item) => {
                    return (
                      // <div className="post3">
                      <img className="post3" src={item.file} key={item._id} />
                      //   <span></span>
                      // </div>
                    );
                  })
                )}
              </Col>
            </div>
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default userProfile;
