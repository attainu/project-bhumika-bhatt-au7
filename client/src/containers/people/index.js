import React, { Component } from "react";
import axios from "axios";

import { PeopleList } from "../../components";

class People extends Component {
  state = {
    user: null,
    followers: [],
    room: null,
  };

  async componentDidMount() {
    await this.getUser();
    const followers = this.state.user.followers;
    await this.getFollowers(followers);
  }

  getUser = async () => {
    try {
      const User = await axios.get(
        `/profile/api/v2/${JSON.parse(localStorage.getItem("User"))._id}`,
        {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("User")).token,
          },
        }
      );

      this.setState({ user: User.data });
    } catch (error) {
      console.log(error);
    }
  };

  getFollowers = async (followers) => {
    for (let data of followers) {
      try {
        const User = await axios.get(`/profile/api/v2/${data.user}`, {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("User")).token,
          },
        });

        const { followers } = this.state;

        this.setState({ followers: [...followers, User.data] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { followers } = this.state;
    return <PeopleList followers={followers} openChat={this.openChat} />;
  }
}

export default People;
