import React from "react";
import { TextInput } from "react-materialize";

import "./style.css";

const ChatLayout = (props) => {
  return (
    <div className="chatCont white">
      <i
        style={{ float: "right", cursor: "pointer" }}
        className="material-icons"
        onClick={(e) => {
          e.preventDefault();
          console.log(e.currentTarget.nextSibling.className);
          e.currentTarget.parentElement.className = "chatCont white";
        }}
      >
        close
      </i>
      <div className="chat"></div>
      <form>
        <TextInput
          id="chatText"
          noLayout
          placeholder="Write your text here"
        ></TextInput>
      </form>
    </div>
  );
};

export default ChatLayout;
