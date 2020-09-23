import React from "react";

const createPost = () => {
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
      <input type="text" placeholder="title" />
      <input type="text" placeholder="Description" />
      <div className="file-field input-field">
        <div className="btn waves-effect waves-light blue darker">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        class="btn waves-effect waves-light blue darker larger"
        type="submit"
        name="action"
      >
        Create
      </button>
    </div>
  );
};

export default createPost;
