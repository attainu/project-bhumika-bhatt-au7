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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts !== this.state.posts) {
      this.getPosts();
      this.getUser();
    }
  }

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
      console.log(User);
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
      console.log(myPost);
      this.setState({ posts: myPost.data });
    } catch (error) {
      M.toast({ html: error.response.data });
    }
  };

  render() {
    const { userName } = JSON.parse(localStorage.getItem("User"));
    return (
      <div>
        <ProfilePage userName={userName} />
      </div>
    );
  }
}

export default Posts;
