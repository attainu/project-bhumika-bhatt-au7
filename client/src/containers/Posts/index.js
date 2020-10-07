import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

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

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.posts !== this.state.posts) {
  //     this.getPosts();
  //     this.getUser();
  //   }
  // }

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
    } catch (error) {}
  };

  getPosts = async () => {
    try {
      // console.log(JSON.parse(localStorage.getItem("User")).token);
      const myPost = await axios.get("http://localhost:5000/posts/myPost", {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("User")).token,
        },
      });
      this.setState({ posts: myPost.data });
    } catch (error) {
      // M.toast({ html: error.response.data });
      console.log(error);
    }
  };

  render() {
    const { userName, image } = JSON.parse(localStorage.getItem("User"));
    const { user, posts } = this.state;
    console.log(posts);
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
