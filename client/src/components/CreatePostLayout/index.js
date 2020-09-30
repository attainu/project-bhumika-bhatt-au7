import React from "react";
import { Textarea, Row, Button, Col } from "react-materialize";

import style from "./CreatePostLayout.module.css";

const CreatePostLayout = (props) => {
  const {
    error,
    submitHandler,
    inputHandler,
    formdata: { description },
    chooseFile,
  } = props;

  return (
    <div className={style.Home}>
      <Row>
        <Textarea
          id="createPost"
          name="description"
          value={description}
          label="Write something here..."
          onChange={inputHandler}
          s={12}
        />
        <Col offset="s5 m6">
          <Button
            style={{ marginRight: "5px" }}
            small
            waves="teal"
            onClick={chooseFile}
          >
            Choose file
          </Button>
          <Button type="submit" small onClick={submitHandler} waves="teal">
            Post
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CreatePostLayout;
