import React, { Component } from "react";

import { ChatLayout } from "../../components";

class Chat extends Component {
  state = {
    text: "",
  };

  inputHandler = (e) => {
    const value = e.target.value;

    this.setState({
      text: value,
    });
  };

  render() {
    return (
      <ChatLayout inputHandler={this.inputHandler} text={this.state.text} />
    );
  }
}

export default Chat;
