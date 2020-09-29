import React from "react";
import {
  Container,
  Row,
  Button,
  Col,
  ProgressBar,
  TextInput,
} from "react-materialize";
import _ from "lodash";

import style from "./HomePage.module.css";
import { CreatePost } from "../../containers";

const Homepage = (props) => {
  const userId = localStorage.getItem("id");

  return (
    <Container>
      <Container className={style.background}>
        <CreatePost />
        {!props.posts ? (
          <Row>
            <Col s={10} offset="s1">
              <ProgressBar />
            </Col>
          </Row>
        ) : (
          _.map(props.posts, (post, idx) => {
            return (
              <div className={style.Home} key={idx}>
                <h5>
                  {post.postedBy.firstName + " " + post.postedBy.lastName}
                  {post.postedBy._id ===
                    JSON.parse(localStorage.getItem("User"))._id && (
                    <i
                      className="material-icons"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => props.delete(post._id)}
                    >
                      delete
                    </i>
                  )}
                </h5>

                <div className="card-image" className={style.Image}>
                  {post.photo ? (
                    <img src={post.photo} alt="img" />
                  ) : (
                    post.description
                  )}
                </div>

                <div className="card-content">
                  {post.likes.includes(userId) ? (
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
