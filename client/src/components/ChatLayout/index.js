import React from "react";
import { TextInput } from "react-materialize";
import _ from "lodash";

import "./style.css";

const ChatLayout = (props) => {
  const {
    text,
    inputHandler,
    sendMessage,
    message,
    previousMessage,
    chatUser,
  } = props;

  return (
    <div
      className="chatCont white"
      onBlur={(e) => {
        e.currentTarget.className = "chatCont white";
      }}
    >
      {chatUser}
      <i
        style={{ float: "right", cursor: "pointer" }}
        className="material-icons"
        onClick={(e) => {
          e.preventDefault();
          e.currentTarget.parentElement.className = "chatCont white";
        }}
      >
        close
      </i>
      <div className="chat" id="chatLen">
        <ul>
          {previousMessage &&
            _.map(previousMessage, (data, idx) => {
              const user = JSON.parse(localStorage.getItem("User"));
              const id = data.user === user.firstName ? "curr" : "other";
              return (
                <li id={id} key={idx}>
                  {data.message}
                </li>
              );
            })}
          {message.user && <li id="curr">{message.message}</li>}
        </ul>
      </div>
      <form onSubmit={sendMessage}>
        <TextInput
          id="chatText"
          value={text}
          onChange={inputHandler}
          noLayout
          placeholder="Write your text here"
          autoFocus
        ></TextInput>
      </form>
    </div>
  );
};

export default ChatLayout;
