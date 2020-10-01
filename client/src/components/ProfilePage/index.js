import React from "react";
import { Container } from "react-materialize";

import "./style.css";

const profilePage = (props) => {
  const { userName, posts, followers, following } = props;

  return (
    <Container>
      <Container>
        <div className="dp">
          <img
            id="dp2"
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt={userName}
          ></img>
          <span>@{userName}</span>
        </div>
        <div className="userConnection">
          {posts || 0} Posts || {followers || 0} Followers || {following || 0}{" "}
          Following
        </div>
        <div className="posts">
          <div className="post"></div>
          <div className="post"></div>
          <div className="post"></div>
        </div>
      </Container>
    </Container>
  );
};

export default profilePage;
