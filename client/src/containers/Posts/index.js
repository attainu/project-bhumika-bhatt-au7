import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import M from "materialize-css";

import { getMyPost } from "../../actions";
import { ProfilePage } from "../../components";

class Posts extends Component {
  componentDidMount = async () => {
    try {
      const myPost = await axios.get("posts/myPost", {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      console.log(myPost);
      this.props.myPost(myPost.data);
    } catch (error) {
      M.toast({ html: error.response.data });
    }
  };

  followUser = async () => {
    try {
      const user = await axios.put(
        "profile/api/follow",
        { followId: localStorage.getItem("id") },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      console.log(user);
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <ProfilePage
          posts={this.props.myPosts}
          userName={this.props.user}
          follow={this.followUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myPosts: state.post.myPost,
  };
};

const dispatchMapToProps = (dispatch) => {
  return {
    myPost: (myPost) => dispatch(getMyPost(myPost)),
  };
};

export default connect(mapStateToProps, dispatchMapToProps)(Posts);
