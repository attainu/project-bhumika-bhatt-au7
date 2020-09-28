"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _schemas = require("../schemas");

var User = function User() {
  (0, _classCallCheck2["default"])(this, User);
  (0, _defineProperty2["default"])(this, "login", function (user) {
    return new Promise(function (res, rej) {
      _schemas.userSchema.findOne({
        email: user.email
      }, function (err, info) {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  });
};

var _default = new User();

exports["default"] = _default;