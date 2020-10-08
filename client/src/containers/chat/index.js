import React, { Component } from "react";
import io from "socket.io-client";
import axios from "axios";

import { ChatLayout } from "../../components";

const socket = io();
const room = "room";
const user = JSON.parse(localStorage.getItem("User"));
socket.emit("room", room);

class Chat extends Component {
  state = {
    text: "",
    message: "",
    previousMessage: [],
  };

  componentDidMount() {
    this.getMessage();
  }

  componentDidUpdate() {
    this.getMessage();
  }

  inputHandler = (e) => {
    const value = e.target.value;
    this.setState({
      text: value,
    });
  };

  getMessage = async () => {
    try {
      const response = await axios.get(`chat/api/v2/${room}`);

      if (response) {
        this.setState({
          previousMessage: response.data,
          message: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  sendMessage = (e) => {
    e.preventDefault();
    socket.emit("text", { user: user.firstName, text: this.state.text });

    socket.on("message", (data) => {
      this.setState({
        message: data,
        text: "",
      });
    });
    this.updateScroll();
  };

  updateScroll = () => {
    let element = document.getElementById("chatLen");
    element.scrollTop = element.scrollHeight + 10;
  };

  render() {
    return (
      <ChatLayout
        inputHandler={this.inputHandler}
        text={this.state.text}
        sendMessage={this.sendMessage}
        message={this.state.message}
        previousMessage={this.state.previousMessage}
      />
    );
  }
}

export default Chat;
