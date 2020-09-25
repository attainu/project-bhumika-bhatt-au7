import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import M from "materialize-css";

import { getPost } from "../../actions";
import { HomePage } from "../../components";

class index extends Component {
  componentDidMount = async () => {
    try {
      const posts = await axios.get("/posts", {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      this.props.posts(posts.data);
    } catch (error) {
      M.toast({ html: error.response.data });
    }
  };

  render() {
    return (
      <div>
        <HomePage posts={this.props.allPost} />
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
