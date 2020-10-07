import React from "react";
import { TextInput } from "react-materialize";
import io from "socket.io-client";

import "./style.css";

const socket = io();

socket.emit("room", "abc");

socket.on("message", (data) => {
  console.log(data);
});

const ChatLayout = (props) => {
  const { text, inputHandler } = props;

  return (
    <div className="chatCont white">
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
      <div className="chat"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          socket.emit("text", text);
        }}
      >
        <TextInput
          id="chatText"
          name="text"
          value={text}
          noLayout
          placeholder="Write your text here"
          onChange={inputHandler}
        ></TextInput>
      </form>
    </div>
  );
};

export default ChatLayout;
