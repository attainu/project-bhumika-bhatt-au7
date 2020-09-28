import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import M from "materialize-css";

import { getPost } from "../../actions";
import { HomePage } from "../../components";

class index extends Component {
  state = {
    renderPost: false,
    likes: [],
  };
  componentDidMount = async () => {
    try {
      const posts = await axios.get("/posts", {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      this.props.posts(posts.data);
    } catch (error) {
      M.toast({ html: error });
    }
  };

  componentDidUpdate = () => {};

  likePost = async (postId) => {
    try {
      const likes = await axios.put(
        "/posts/like",
        { postId },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      const newData = this.props.allPost.map((item) => {
        if (item._id === likes._id) {
          this.setState({ likes: likes });
          return likes;
        } else {
          return item;
        }
      });
      this.props.posts(newData);
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
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      const newData = this.props.allPost.map((item) => {
        if (item._id === likes._id) {
          return likes;
        } else {
          return item;
        }
      });
      this.props.posts(newData);
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
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      const newData = this.props.allPost.map((item) => {
        if (item._id === comments._id) {
          return comments;
        } else {
          return item;
        }
      });
      this.props.posts(newData);
    } catch (error) {
      console.log(error);
    }
  };

  deletingPost = async (postId) => {
    try {
      const deletedPost = await axios.delete(`/posts/delete/${postId}`, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
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

  renderCreatePost = (e) => {
    e.preventDefault();
    this.setState({ renderPost: true });
  };

  render() {
    return (
      <div>
        <HomePage
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
