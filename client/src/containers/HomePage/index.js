import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { getPost } from "../../actions";
import { Homepage } from "../../components";

class index extends Component {
  state = {
    renderPost: false,
    likes: [],
    posts: null,
    disable: true,
  };

  componentDidMount = () => {
    this.getPosts();
  };

  likePost = async (postId) => {
    try {
      const likes = await axios.put(
        "/posts/like",
        { postId },
        {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("User")).token,
          },
        }
      );
      if (likes) this.getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  unlikePost = async (postId) => {
    try {
      const likes = await axios.put(
        "/posts/unlike",
        { postId },
        {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("User")).token,
          },
        }
      );
      if (likes) this.getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  commentingPost = async (postId, text) => {
    try {
      const comments = await axios.put(
        "/posts/comment",
        { postId, text },
        {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("User")).token,
          },
        }
      );
      if (comments) this.getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  deletingPost = async (postId) => {
    try {
      const deletedPost = await axios.delete(`/posts/delete/${postId}`, {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("User")).token,
        },
      });
      console.log(deletedPost);
      const newdata = this.props.allPost.filter((item) => {
        return item._id !== deletedPost.data._id;
      });
      this.props.posts(newdata);
    } catch (error) {
      console.log(error);
    }
  };

  getPosts = async () => {
    try {
      const posts = await axios.get("/posts", {
        headers: {
          authorization:
            "Bearer " + JSON.parse(localStorage.getItem("User")).token,
        },
      });
      if (posts) {
        this.props.posts(posts.data.reverse());
      }
    } catch (error) {
      console.log("Get post error:", error);
    }
  };

  render() {
    return (
      <div>
        <Homepage
          disbale={this.state.disable}
          posts={this.props.allPost}
          like={this.likePost}
          likes={this.state.likes}
          unlike={this.unlikePost}
          comment={this.commentingPost}
          delete={this.deletingPost}
          renderPost={this.state.renderPost}
          renderCreatePost={this.renderCreatePost}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allPost: state.post.posts,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    posts: (posts) => dispatch(getPost(posts)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(index);
