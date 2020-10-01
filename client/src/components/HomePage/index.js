import React from "react";
import { Container, Row, Col, ProgressBar, TextInput } from "react-materialize";
import _ from "lodash";

import "./style.css";
import { CreatePost } from "../../containers";

const Homepage = (props) => {
  const { _id } = JSON.parse(localStorage.getItem("User"));

  return (
    <Container>
      <Container className="">
        <CreatePost />
        {!props.posts ? (
          <Row>
            <Col s={10} offset="s1">
              <ProgressBar className="purple" />
            </Col>
          </Row>
        ) : (
          _.map(props.posts, (post, idx) => {
            return (
              <div className="posts2" key={idx}>
                <div className="dp2">
                  <img
                    id="dp3"
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    alt={post.postedBy.userName}
                  ></img>
                  <span>
                    @{post.postedBy.firstName + " " + post.postedBy.lastName}
                  </span>
                  {post.postedBy._id ===
                    JSON.parse(localStorage.getItem("User"))._id && (
                    <i
                      id="delete"
                      className="material-icons"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => props.delete(post._id)}
                    >
                      delete
                    </i>
                  )}
                </div>
                <div className="post2">
                  <img
                    id="postImg"
                    src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    alt="img"
                  />
                  <h5>{post.description}</h5>
                </div>

                <div className="">
                  {post.likes.includes(_id) ? (
                    <i
                      className="material-icons"
                      onClick={() => {
                        props.unlike(post._id);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      thumb_down
                    </i>
                  ) : (
                    <i
                      className="material-icons"
                      onClick={() => {
                        props.like(post._id);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      thumb_up
                    </i>
                  )}

                  <h6>{post.likes.length} likes</h6>
                  {/* <h6>{post.title}</h6> */}
                  {post.photo && <p>{post.description}</p>}
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
                      id="addComment"
                      name="comment"
                      placeholder="Add comment"
                    />
                  </form>
                </div>
              </div>
            );
          })
        )}

        {/* </div> */}
      </Container>
    </Container>
  );
};

export default Homepage;
