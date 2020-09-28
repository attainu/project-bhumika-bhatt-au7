"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("../controllers");

var _validators = require("../validators");

var router = (0, _express.Router)();
router.post("/api/v1", _validators.signupValidator, _controllers.userController.signup);
var _default = router;
exports["default"] = _default;