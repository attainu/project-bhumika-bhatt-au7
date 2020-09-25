import React from "react";

import classes from "./HomePage.module.css";

const homePage = (props) => {
  console.log(props.posts);
  return (
    <div className="home" style={{ margin: "26px auto" }}>
      {!props.posts ? (
        <h3>No post to show, start adding posts</h3>
      ) : (
        <div className="card home-card" className={classes.Home}>
          <h4>UserName</h4>
          <div className="card-image" className={classes.Image}>
            <img
              src="https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="img"
            />
          </div>

          <div className="card-content">
            <i className="material-icons">favorite</i>
            <h6>Card Title</h6>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <input type="text" placeholder="Add Comments" />
          </div>
        </div>
      )}
    </div>
  );
};

export default homePage;
