import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

import { CreatePost } from "../../components";

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

    const { formdata } = this.state;
    try {
      const fileData = new FormData();
      fileData.append("file", formdata.photo);
      fileData.append("upload_preset", "connectX");
      fileData.append("cloud_name", "connectx");
      const file = await axios.post(
        "https://api.cloudinary.com/v1_1/connectx/image/upload",
        fileData
      );
      this.setState({ formdata: { ...formdata, url: file.data.url } });
    } catch (error) {
      console.log(error);
    }
    if (formdata.url !== "") {
      try {
        const post = await axios.post(
          "posts/createPost",
          {
            title: formdata.title,
            description: formdata.description,
            photo: formdata.url,
          },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(post);
      } catch (error) {
        M.toast({ html: error.response.data });
      }
    }
  };

  render() {
    const { formdata, error } = this.state;
    return (
      <div>
        <CreatePost
          error={error}
          submitHandler={this.submitHandler}
          formdata={formdata}
          inputHandler={this.inputHandler}
          inputHandlerFile={this.inputHandlerFile}
          titleRef={this.titleRef}
          descriptionRef={this.descriptionRef}
          photoRef={this.photoRef}
        />
      </div>
    );
  }
}

export default createPost;
