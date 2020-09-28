"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = require("bcryptjs");

var hashPassword = function hashPassword(password) {
  return new Promise(function (res, rej) {
    (0, _bcryptjs.genSalt)(10, function (err, salt) {
      (0, _bcryptjs.hash)(password, salt, function (err, hashedPassword) {
        if (err) {
          rej(err);
        } else {
          res(hashedPassword);
        }
      });
    });
  });
};

var _default = hashPassword;
exports["default"] = _default;