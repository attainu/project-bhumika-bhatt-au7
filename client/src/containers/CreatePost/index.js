import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import M from "materialize-css";

import { CreatePostLayout } from "../../components";
import { getPost } from "../../actions";

class createPost extends Component {
  state = {
    error: "",
    formdata: {
      description: "",
      file: "",
      fileName: "",
    },
  };

  descriptionRef = React.createRef();
  photoRef = React.createRef();
  urlRef = React.createRef();

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { formdata } = this.state;
    this.setState({
      error: "",
      formdata: { ...formdata, [name]: value },
    });
  };

  inputHandlerFile = (e) => {
    const { formdata } = this.state;
    this.setState({
      error: "",
      formdata: {
        ...formdata,
        file: e.target.files[0],
        fileName: e.target.files[0].name,
      },
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    const url = await this.uploadFile();
    this.newPost(url);
  };

  newPost = async (url) => {
    const { formdata } = this.state;

    try {
      const response = await axios.post(
        "posts/createPost",
        { description: formdata.description, file: url },
        {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("User")).token,
          },
        }
      );

      if (response) {
        this.setState({
          error: "",
          formdata: { description: "", file: "", fileName: "" },
        });
        M.toast({ html: "Post successfull!" });
        this.getPosts();
      }
    } catch (error) {
      this.setState({ error: "Post failed" });
      console.log("Upload-error", error.response);
    }
  };

  uploadFile = async () => {
    const { formdata } = this.state;
    const { _id } = JSON.parse(localStorage.getItem("User"));

    if (formdata.file) {
      try {
        const fileData = new FormData();
        fileData.append("file", formdata.file);
        fileData.append("folder", `Posts/${_id}`);
        fileData.append("upload_preset", "connectX");
        fileData.append("cloud_name", "connectx");
        const file = await axios.post(
          "https://api.cloudinary.com/v1_1/connectx/image/upload",
          fileData
        );
        if (file) {
          return file.data.url;
        }
      } catch (error) {
        this.setState({ error: "File upload failed" });
        console.log("Cloudinary-error:", error);
      }
    } else {
      return "";
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
      M.toast({ html: error });
    }
  };

  render() {
    const { formdata, error } = this.state;

    return (
      <CreatePostLayout
        error={error}
        submitHandler={this.submitHandler}
        formdata={formdata}
        inputHandler={this.inputHandler}
        inputHandlerFile={this.inputHandlerFile}
        titleRef={this.titleRef}
        descriptionRef={this.descriptionRef}
        photoRef={this.photoRef}
      />
    );
  }
}

const dispatchStateToProps = (dispatch) => {
  return {
    posts: (post) => dispatch(getPost(post)),
  };
};

export default connect(null, dispatchStateToProps)(createPost);
