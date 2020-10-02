import React from "react";

import classes from "./ProfilePage.module.css";

const userProfile = (props) => {
  console.log(props);
  return (
    <div className={classes.Container}>
      <div className={classes.ProfileDes}>
        <div className={classes.Image}>
          <img
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="profile"
          />
        </div>
        <div>
          <h4>userName</h4>
          <div className={classes.Data}>
            <h6> 40 Posts </h6>
            <h6> 40 Followers </h6>
            <h6> 40 Following </h6>
          </div>
          {/* <button
            className="btn waves-effect waves-light blue darker larger"
            onClick={() => props.follow()}
          >
            Follow
          </button> */}
        </div>
      </div>
      );
      <div className={classes.Gallery}>
        {!props.posts ? (
          <h3>Loading....</h3>
        ) : (
          props.posts.map((item) => {
            return (
              <img
                className={classes.Item}
                src={item.photo}
                alt={item.title}
                key={item._id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default userProfile;
