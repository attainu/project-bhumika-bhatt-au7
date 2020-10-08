import React, { Component } from "react";
import io from "socket.io-client";

import { ChatLayout } from "../../components";

const socket = io();
socket.emit("room", "room");

class Chat extends Component {
  state = {
    text: "",
    message: [],
  };

  inputHandler = (e) => {
    const value = e.target.value;
    this.setState({
      text: value,
    });
  };

  sendMessage = (e) => {
    e.preventDefault();
    socket.emit("text", this.state.text);

    const { message, text } = this.state;
    socket.on("message", (text) => {
      this.setState({
        message: [...message, text],
        text: "",
      });
    });
  };

  render() {
    return (
      <ChatLayout
        inputHandler={this.inputHandler}
        text={this.state.text}
        sendMessage={this.sendMessage}
        message={this.state.message}
      />
    );
  }
}

export default Chat;
