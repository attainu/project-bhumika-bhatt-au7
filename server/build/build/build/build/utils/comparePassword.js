"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = require("bcryptjs");

var comparePassword = function comparePassword(password, hashedPassword) {
  return new Promise(function (res, rej) {
    (0, _bcryptjs.compare)(password, hashedPassword, function (err, status) {
      if (err) {
        rej(err);
      } else {
        res(status);
      }
    });
  });
};

var _default = comparePassword;
exports["default"] = _default;