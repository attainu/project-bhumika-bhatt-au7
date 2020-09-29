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
      title: "",
      description: "",
      photo: "",
      url: "",
    },
  };

  titleRef = React.createRef();
  descriptionRef = React.createRef();
  photoRef = React.createRef();
  urlRef = React.createRef();

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { formdata } = this.state;
    this.setState({
      formdata: { ...formdata, [name]: value },
    });
  };

  inputHandlerFile = (e) => {
    const { formdata } = this.state;
    this.setState({
      formdata: { ...formdata, photo: e.target.files[0] },
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    // const { formdata } = this.state;
    // try {
    //   const fileData = new FormData();
    //   fileData.append("file", formdata.photo);
    //   fileData.append("upload_preset", "connectX");
    //   fileData.append("cloud_name", "connectx");
    //   const file = await axios.post(
    //     "https://api.cloudinary.com/v1_1/connectx/image/upload",
    //     fileData
    //   );
    //   this.setState({ formdata: { ...formdata, url: file.data.url } });
    // } catch (error) {
    //   console.log(error);
    // }
    // if (formdata.url !== "") {
    //   try {
    //     const data = {
    //       title: formdata.title,
    //       description: formdata.description,
    //       photo: formdata.url,
    //     };
    //     const post = await axios.post("posts/createPost", data, {
    //       headers: { authorization: "Bearer " + localStorage.getItem("token") },
    //     });
    //     console.log(post);
    //   } catch (error) {
    //     M.toast({ html: error.response.data });
    //   }
    // }

    const { formdata } = this.state;

    try {
      const response = await axios.post(
        "posts/createPost",
        { description: formdata.description },
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      );

      if (response) {
        this.setState({
          formdata: { description: "" },
        });

        this.getPosts();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  getPosts = async () => {
    try {
      const posts = await axios.get("/posts", {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
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
