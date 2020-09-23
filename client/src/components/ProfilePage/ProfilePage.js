import React from "react";

import classes from "./ProfilePage.module.css";

const profilePage = () => {
  return (
    <div className={classes.Conatiner}>
      <div className={classes.ProfileDes}>
        <div className={classes.Image}>
          <img
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="profile"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default profilePage;
