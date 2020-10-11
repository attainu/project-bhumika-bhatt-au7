import React, { Component } from "react";
import axios from "axios";

import { ProfilePage } from "../../components";

class Posts extends Component {
  state = {
    posts: null,
    user: null,
  };
  componentDidMount = async () => {
    this.getPosts();
    this.getUser();
  };

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
    } catch (error) {}
  };

  getPosts = async () => {
    try {
      const myPost = await axios.get("posts/myPost", {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("User")).token,
        },
      });
      this.setState({ posts: myPost.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { userName, image } = JSON.parse(localStorage.getItem("User"));
    return (
      <div>
        <ProfilePage
          userName={userName}
          image={image}
          user={this.state.user}
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default Posts;
