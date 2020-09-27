"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ObjectId = _mongoose.Schema.Types.ObjectId;
var PostSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  likes: [{
    type: ObjectId,
    ref: "Users"
  }],
  comments: [{
    text: String,
    postedBy: {
      type: ObjectId,
      ref: "Users"
    }
  }],
  postedBy: {
    type: ObjectId,
    ref: "Users"
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)("Post", PostSchema);

exports["default"] = _default;