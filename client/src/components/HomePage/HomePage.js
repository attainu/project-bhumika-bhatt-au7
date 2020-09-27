import React from "react";

import classes from "./HomePage.module.css";

const homePage = (props) => {
  console.log(props.posts);
  return (
    <div className="home" style={{ margin: "26px auto" }}>
      {!props.posts ? (
        <h3>Loading ..... </h3>
      ) : (
        props.posts.map((item) => {
          return (
            <div className="card home-card" className={classes.Home}>
              <h4>{item.postedBy.firstName + " " + item.postedBy.lastName}</h4>
              <div className="card-image" className={classes.Image}>
                <img src={item.photo} alt="img" />
              </div>

              <div className="card-content">
                <i className="material-icons">favorite</i>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                <input type="text" placeholder="Add Comments" />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default homePage;
