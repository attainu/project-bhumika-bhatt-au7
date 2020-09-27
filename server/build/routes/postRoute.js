"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("../controllers");

var _utils = require("../utils");

var router = (0, _express.Router)();
router.get("/", _utils.Auth, _controllers.postController.posts);
router.post("/createPost", _utils.Auth, _controllers.postController.createPost);
router.get("/myPost", _utils.Auth, _controllers.postController.myPosts);
router.get("/onePost/:postId", _utils.Auth, _controllers.postController.onePost);
router.put("/like", _utils.Auth, _controllers.postController.likePost);
router.put("/unlike", _utils.Auth, _controllers.postController.unlikePost);
router.put("/comment", _utils.Auth, _controllers.postController.commentPost);
router["delete"]("/delete/:postId", _utils.Auth, _controllers.postController.deletePost);
var _default = router;
exports["default"] = _default;