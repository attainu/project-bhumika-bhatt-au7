"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var user = _mongoose["default"].model("Users");

var Auth = function Auth(req, res, next) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      err: "You must be logged in to view page"
    });
  }

  var token = authorization.replace("Bearer ", "");

  _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY, function (err, info) {
    if (err) {
      return res.status(401).json({
        error: "You must login first!!!"
      });
    }

    var _id = info._id;
    user.findById(_id).then(function (data) {
      req.user = data;
      next();
    });
  });
};

var _default = Auth;
exports["default"] = _default;