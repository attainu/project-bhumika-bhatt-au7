import React, { Component } from "react";
import axios from "axios";

import { PeopleList } from "../../components";
import { getRoom } from "../../actions";

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

  selectUser = (e) => {
    document.getElementsByClassName("chatCont")[0].className += " chatActive";

    console.log(e);
  };

  getUser = async () => {
    try {
      const User = await axios.get(
        `http://localhost:5000/profile/api/v2/${
          JSON.parse(localStorage.getItem("User"))._id
        }`,
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
    for (let id of followers) {
      try {
        const User = await axios.get(
          `http://localhost:5000/profile/api/v2/${id}`,
          {
            headers: {
              authorization:
                "Bearer " + JSON.parse(localStorage.getItem("User")).token,
            },
          }
        );

        const { followers } = this.state;

        this.setState({ followers: [...followers, User.data] });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { followers } = this.state;
    return <PeopleList followers={followers} selectUser={this.selectUser} />;
  }
}

const dispatchStateToProps = (dispatch) => {
  return {
    room: (room) => dispatch(getRoom(room)),
  };
};

export default People;
