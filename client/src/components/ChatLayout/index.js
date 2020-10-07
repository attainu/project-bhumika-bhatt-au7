import React from "react";
import { TextInput } from "react-materialize";
import _ from "lodash";

import "./style.css";

const ChatLayout = (props) => {
  const { text, inputHandler, sendMessage, message } = props;

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
      <div className="chat">
        <ul>
          {message &&
            _.map(message, (text, idx) => {
              return <li key={idx}>{text}</li>;
            })}
        </ul>
      </div>
      <form onSubmit={sendMessage}>
        <TextInput
          id="chatText"
          value={text}
          onChange={inputHandler}
          noLayout
          placeholder="Write your text here"
        ></TextInput>
      </form>
    </div>
  );
};

export default ChatLayout;
