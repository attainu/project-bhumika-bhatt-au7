import React from "react";
import { Textarea, Row, Button } from "react-materialize";

import "./style.css";

const CreatePostLayout = (props) => {
  const {
    error,
    submitHandler,
    inputHandler,
    inputHandlerFile,
    formdata: { description, fileName },
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
        <div className="errorPost">
          <span>{error}</span>
        </div>

        <Button
          id="post"
          small
          waves="purple"
          className="botton3 purple darken-2"
          onClick={submitHandler}
        >
          Post
        </Button>
        <div>
          <label className="edit2" htmlFor="upload2">
            CHOOSE FILE
          </label>
          <input id="upload2" onChange={inputHandlerFile} type="file"></input>
          <span id="file">{fileName}</span>
        </div>
      </Row>
    </div>
  );
};

export default CreatePostLayout;
