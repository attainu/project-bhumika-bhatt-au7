import React from "react";

import classes from "./HomePage.module.css";
import { CreatePost } from "../../containers";

const homePage = (props) => {
  const userId = localStorage.getItem("id");
  return (
    <div>
      <i
        class="large material-icons"
        style={{
          display: "flex",
          justifyContent: "center",
          onClick: { CreatePost },
        }}
      >
        add_circle_outline
      </i>
      <div className="home" style={{ margin: "26px auto" }}>
        {!props.posts ? (
          <h2>loading</h2>
        ) : (
          props.posts.map((item) => {
            return (
              <div
                className="card home-card"
                className={classes.Home}
                key={item._id}
              >
                <h5>
                  {item.postedBy.firstName + " " + item.postedBy.lastName}
                  {item.postedBy._id === localStorage.getItem("id") && (
                    <i
                      className="material-icons"
                      style={{ float: "right" }}
                      onClick={() => props.delete(item._id)}
                    >
                      delete
                    </i>
                  )}
                </h5>

                <div className="card-image" className={classes.Image}>
                  <img src={item.photo} alt="img" />
                </div>

                <div className="card-content">
                  {item.likes.includes(userId) ? (
                    <i
                      className="material-icons"
                      onClick={() => {
                        props.unlike(item._id);
                      }}
                    >
                      thumb_down
                    </i>
                  ) : (
                    <i
                      className="material-icons"
                      onClick={() => {
                        props.like(item._id);
                      }}
                    >
                      thumb_up
                    </i>
                  )}

                  <h6>{item.likes.length} likes</h6>
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                  {item.comments.map((comment) => {
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
                      props.comment(item._id, e.target[0].value);
                    }}
                  >
                    <input type="text" placeholder="Add Comments" />
                  </form>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default homePage;
