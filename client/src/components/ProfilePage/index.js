import React from "react";
import { Row, Col, ProgressBar } from "react-materialize";

import "./style.css";

const profilePage = (props) => {
  const { userName, posts, user, image } = props;

  return (
    <Row>
      <Col s={12} m={8} l={6} offset="m2 l3">
        <div className="dp">
          <img id="dp2" src={image} alt={userName}></img>
          <span>@{userName}</span>
        </div>
        {!user ? (
          <Col s={10} offset="s1">
            <ProgressBar className="purple" />
          </Col>
        ) : (
          <div>
            <div className="userConnectionDetails">
              {(posts && posts.length) || 0} Posts || {user.followers.length}{" "}
              Followers || {user.following.length} Following
            </div>
            <Row>
              <div className="posts center-align">
                <Col>
                  {!props.posts ? (
                    <Col s={10} offset="s1">
                      <ProgressBar className="purple" />
                    </Col>
                  ) : (
                    props.posts.map((item) => {
                      return (
                        // <div className="post3">
                        <img
                          className="post3"
                          src={item.file}
                          key={item._id}
                          alt="Error fething the post"
                        />
                        //   <span></span>
                        // </div>
                      );
                    })
                  )}
                  {/* <img
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
                  ></img> */}
                </Col>
              </div>
            </Row>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default profilePage;
