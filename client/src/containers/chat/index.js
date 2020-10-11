import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { ChatLayout } from "../../components";
import { isEqual } from "lodash";
import socket from "../../configs/socket";

const user = JSON.parse(localStorage.getItem("User"));

class Chat extends Component {
  state = {
    text: "",
    chatUser: "",
    message: "",
    previousMessage: [],
  };

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props, prevProps)) {
      this.updateState();
    }

    this.updateScroll();
  }

  updateState = () => {
    if (this.props.chatRoom) {
      this.setState({
        previousMessage: this.props.chatRoom.message,
        chatUser: this.props.chatRoom.roomId.firstName,
      });
    }
  };

  inputHandler = (e) => {
    const value = e.target.value;
    this.setState({
      text: value,
    });
  };

  getMessage = async () => {
    try {
      const response = await axios.get(`chat/api/v2/${this.state.roomId}`);

      if (response) {
        this.setState({
          previousMessage: response.data,
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
        text: "",
      });
      this.getMessage();
    });
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
        chatUser={this.state.chatUser}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chatRoom: state.chatRoom,
  };
};

export default connect(mapStateToProps)(Chat);
