"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  lastName: {
    type: String,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)("Users", userSchema);

exports["default"] = _default;