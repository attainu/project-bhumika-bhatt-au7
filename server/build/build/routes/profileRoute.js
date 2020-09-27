"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("../controllers");

var router = (0, _express.Router)();
router.get("/api/v1/:userName", _controllers.profileController.getUser);
router.patch("/api/v2", _controllers.profileController.updateUser);
router.patch("/api/v3", _controllers.profileController.updateUserPassword);
var _default = router;
exports["default"] = _default;