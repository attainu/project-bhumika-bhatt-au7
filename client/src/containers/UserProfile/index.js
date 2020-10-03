import React, { Component } from "react";
import axios from "axios";

import { UserProfilePage } from "../../components";

class UserProfile extends Component {
  state = {
    userPosts: null,
  };
  componentDidMount = async () => {
    this.getUser();
  };

  getUser = async () => {
    const { userId } = this.props.computedMatch.params;
    try {
      const userPost = await axios.get(`http://localhost:3000/user/${userId}`, {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("User")).token,
        },
      });
      this.setState({ userPosts: userPost.data });
    } catch (error) {
      console.log(error);
    }
  };

  // followUser = async () => {
  //   try {
  //     const user = await axios.put(
  //       "profile/api/follow",
  //       { followId: localStorage.getItem("id") },
  //       {
  //         headers: { authorization: "Bearer " + localStorage.getItem("token") },
  //       }
  //     );
  //     console.log(user);
  //   } catch (error) {}
  // };

  render() {
    return (
      <div>
        <UserProfilePage
          // posts={this.state.userPosts.posts}
          user={this.state.userPosts}
          // follow={this.followUser}
        />
      </div>
    );
  }
}

export default UserProfile;
