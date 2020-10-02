import React from "react";

const createPost = (props) => {
  const {
    error,
    submitHandler,
    inputHandler,
    inputHandlerFile,
    formdata: { title, description },
    titleRef,
    descriptionRef,
    photoRef,
  } = props;

  return (
    <div
      className="card input-feild"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {error && <h1>{error}</h1>}
      <input
        type="text"
        placeholder="title"
        name="title"
        value={title}
        onChange={inputHandler}
        ref={titleRef}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={inputHandler}
        ref={descriptionRef}
      />
      <div className="file-field input-field">
        <div className="btn waves-effect waves-light blue darker">
          <span>Upload Image</span>
          <input type="file" onChange={inputHandlerFile} ref={photoRef} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light blue darker larger"
        onClick={submitHandler}
      >
        Create
      </button>
    </div>
  );
};

export default createPost;
