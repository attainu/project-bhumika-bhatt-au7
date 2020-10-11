import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import _ from "lodash";

import "./style.css";
import { getChatUser, getMessage, getRoomId } from "../../actions";
import socket from "../../configs/socket";

const PeopleList = (props) => {
  const dispatch = useDispatch();
  const { followers, user } = props;

  return (
    <div className="peopleList white">
      {followers &&
        _.map(followers, (follower, idx) => {
          if (user.following) {
            for (let elm of user.following) {
              if (follower._id === elm) {
                return (
                  <div
                    key={idx}
                    className="people"
                    onClick={async (e) => {
                      document.getElementsByClassName(
                        "chatCont"
                      )[0].className += " chatActive";

                      socket.disconnect();
                      for (let elm of follower.followers) {
                        if (elm.user.toString() === user._id.toString()) {
                          dispatch(getChatUser(follower));
                          socket.connect();
                          socket.emit("room", elm.roomId);
                          dispatch(getRoomId(elm.roomId));
                          try {
                            const response = await axios.get(
                              `chat/api/v2/${elm.roomId}`
                            );

                            if (response) {
                              dispatch(getMessage(response.data));
                            }
                          } catch (error) {
                            console.log(error);
                          }
                        }
                      }
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
              }
            }
          }
        })}
    </div>
  );
};

export default PeopleList;
