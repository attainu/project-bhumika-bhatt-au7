import React from "react";
import io from "socket.io-client";
import _ from "lodash";

import "./style.css";

export const socket = io();

const PeopleList = (props) => {
  const { followers } = props;
  return (
    <div className="peopleList white">
      {followers &&
        _.map(followers, (follower, idx) => {
          return (
            <div
              key={idx}
              className="people"
              onClick={(e) => {
                document.getElementsByClassName("chatCont")[0].className +=
                  " chatActive";
              }}
            >
              <img
                className="peopleImg"
                src={follower.image}
                alt={follower.userName}
              ></img>
              {follower.firstName}
            </div>
          );
        })}
    </div>
  );
};

export default PeopleList;
