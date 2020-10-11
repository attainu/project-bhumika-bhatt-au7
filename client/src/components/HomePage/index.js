import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, ProgressBar, TextInput } from "react-materialize";
import _ from "lodash";

import "./style.css";
import { CreatePost, Chat, People } from "../../containers";

const Homepage = (props) => {
  const { _id } = JSON.parse(localStorage.getItem("User"));

  return (
    <Row>
      <Col s={12} m={8} l={4} offset="m2 l4">
        <CreatePost />
        {!props.posts ? (
          <Col s={10} offset="s1">
            <ProgressBar className="purple" />
          </Col>
        ) : (
          _.map(props.posts, (post, idx) => {
            return (
              <div className="posts2" key={idx}>
                <div className="dp2">
                  <img
                    id="dp3"
                    src={post.postedBy.image}
                    alt={post.postedBy.userName}
                  ></img>
                  <span id="name">
                    <Link
                      to={
                        post.postedBy._id !==
                        JSON.parse(localStorage.getItem("User"))._id
                          ? `/profile/${post.postedBy._id}`
                          : "/profile"
                      }
                    >
                      {post.postedBy.firstName + " " + post.postedBy.lastName}
                    </Link>
                  </span>
                  {post.postedBy._id ===
                    JSON.parse(localStorage.getItem("User"))._id && (
                    <i
                      id="delete"
                      className="material-icons"
                      onClick={() => props.delete(post._id)}
                      style={{ userSelect: "none" }}
                    >
                      delete
                    </i>
                  )}
                </div>
                <div className="post2">
                  {post.file === "" || post.file === undefined ? (
                    <div className="textImg">
                      <span id="postText">{post.description}</span>
                    </div>
                  ) : (
                    <img id="postImg" src={post.file} alt="img" />
                  )}
                </div>
                <div className="engagement">
                  <h5>{post.file && post.description}</h5>
                  {post.likes.includes(_id) ? (
                    <i
                      className="material-icons"
                      onClick={() => {
                        props.unlike(post._id);
                      }}
                      style={{
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    >
                      thumb_down
                    </i>
                  ) : (
                    <i
                      className="material-icons"
                      onClick={() => {
                        props.like(post._id);
                      }}
                      style={{
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    >
                      thumb_up
                    </i>
                  )}

                  <h6>{post.likes.length} likes</h6>
                  {post.comments.map((comment) => {
                    return (
                      <h6 key={comment._id}>
                        <span style={{ fontWeight: "500" }}>
                          {comment.postedBy.firstName +
                            " " +
                            comment.postedBy.lastName +
                            " "}
                        </span>
                        {comment.text}
                      </h6>
                    );
                  })}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      props.comment(post._id, e.target[0].value);
                      e.target[0].value = "";
                    }}
                  >
                    <TextInput
                      id={idx.toString()}
                      name="comment"
                      placeholder="Add comment"
                      noLayout
                    />
                  </form>
                </div>
              </div>
            );
          })
        )}
      </Col>
      <div className="hide-on-med-and-down">
        <Col offset="l1">
          <Chat />
        </Col>
        <Col offset="l1">
          <People />
        </Col>
      </div>
    </Row>
  );
};

export default Homepage;
