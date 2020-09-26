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
  userName: {
    type: String,
    "default": function _default() {
      return this.email;
    },
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  country: {
    type: String,
    min: 3,
    maxlength: 100
  },
  mobile: {
    type: String,
    minlength: 10,
    maxlength: 15
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default2 = (0, _mongoose.model)("Users", userSchema);

exports["default"] = _default2;