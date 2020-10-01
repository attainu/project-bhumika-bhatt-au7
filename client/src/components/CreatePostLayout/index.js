import React from "react";
import { Textarea, Row, Button, Col } from "react-materialize";

import "./style.css";

const CreatePostLayout = (props) => {
  const {
    error,
    submitHandler,
    inputHandler,
    formdata: { description },
    chooseFile,
  } = props;

  return (
    <div className="createPostContainer">
      <Row>
        <Textarea
          id="createPost"
          name="description"
          value={description}
          label="Write something here..."
          onChange={inputHandler}
          s={12}
        />

        <Button
          id="post"
          small
          waves="purple"
          className="botton3 purple darken-2"
          onClick={submitHandler}
        >
          Post
        </Button>
        <Button
          small
          id="chooseFile"
          waves="purple"
          className="botton3 purple darken-2"
          onClick={chooseFile}
        >
          Choose file
        </Button>
      </Row>
    </div>
  );
};

export default CreatePostLayout;
