"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function get() {
    return _userModel["default"];
  }
});
Object.defineProperty(exports, "Profile", {
  enumerable: true,
  get: function get() {
    return _profileModel["default"];
  }
});
Object.defineProperty(exports, "Post", {
  enumerable: true,
  get: function get() {
    return _postModel["default"];
  }
});

var _userModel = _interopRequireDefault(require("./userModel"));

var _profileModel = _interopRequireDefault(require("./profileModel"));

var _postModel = _interopRequireDefault(require("./postModel"));