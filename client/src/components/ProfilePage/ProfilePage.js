import React from "react";

import classes from "./ProfilePage.module.css";

const profilePage = () => {
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
          <h4>UserName</h4>
          <div className={classes.Data}>
            <h6> 40 Posts </h6>
            <h6> 40 Followers </h6>
            <h6> 40 Following </h6>
          </div>
        </div>
      </div>
      <div className={classes.Gallery}>
        <img
          className={classes.Item}
          src="https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <img
          className={classes.Item}
          src="https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <img
          className={classes.Item}
          src="https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <img
          className={classes.Item}
          src="https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <img
          className={classes.Item}
          src="https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <img
          className={classes.Item}
          src="https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <img
          className={classes.Item}
          src="https://images.unsplash.com/photo-1515121061221-7d6ce2dcd1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
      </div>
    </div>
  );
};

export default profilePage;
