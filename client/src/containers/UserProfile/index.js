import React, { Component } from "react";
import axios from "axios";

import { UserProfilePage } from "../../components";

class UserProfile extends Component {
  state = {
    userPosts: null,
    showFollow: true,
  };
  componentDidMount = async () => {
    this.getUser();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userPosts !== this.state.userPosts) {
      this.getUser();
    }
  }

  getUser = async () => {
    const { userId } = this.props.computedMatch.params;
    const { token } = JSON.parse(localStorage.getItem("User"));
    try {
      const userPost = await axios.get(`/user/${userId}`, {
        headers: { authorization: "Bearer " + token },
      });
      this.setState({ userPosts: userPost.data });
    } catch (error) {
      console.log(error);
    }
  };

  followUser = async () => {
    const { userId } = this.props.computedMatch.params;
    const { token } = JSON.parse(localStorage.getItem("User"));
    try {
      const user = await axios.put(
        "/profile/api/follow",
        { followId: userId },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user.data.info));
      this.setState((prevState) => {
        const newFollower = prevState.userPosts.followers.filter(
          (item) => item !== user.data.info._id
        );
        console.log(newFollower);
        return {
          ...prevState,
          user: {
            ...prevState.user,
            followers: newFollower,
          },
          showFollow: false,
        };
      });
    } catch (error) {}
  };

  unfollowUser = async () => {
    const { userId } = this.props.computedMatch.params;
    const { token } = JSON.parse(localStorage.getItem("User"));
    try {
      const user = await axios.put(
        "/profile/api/unfollow",
        { unfollowId: userId },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      localStorage.setItem("user", JSON.stringify(user.data.info));
      this.setState((prevState) => {
        return {
          ...prevState,
          user: user.data,
          showFollow: true,
        };
      });
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <UserProfilePage
          // posts={this.state.userPosts.posts}
          user={this.state.userPosts}
          follow={this.followUser}
          unfollow={this.unfollowUser}
          show={this.state.showFollow}
        />
      </div>
    );
  }
}

export default UserProfile;
