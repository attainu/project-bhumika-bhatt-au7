"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var postController = {
  posts: function () {
    var _posts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _posts2;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models.Post.allPost();

            case 3:
              _posts2 = _context.sent;
              res.status(200).json(_posts2);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(400).send(_context.t0._message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function posts(_x, _x2) {
      return _posts.apply(this, arguments);
    }

    return posts;
  }(),
  createPost: function () {
    var _createPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var post;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _models.Post.createPost(req.user, req.body);

            case 3:
              post = _context2.sent;
              res.status(200).json({
                post: post
              });
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              res.status(400).send(_context2.t0._message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    function createPost(_x3, _x4) {
      return _createPost.apply(this, arguments);
    }

    return createPost;
  }(),
  myPosts: function () {
    var _myPosts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var posts;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _models.Post.myPost(req.user._id);

            case 3:
              posts = _context3.sent;
              res.status(200).json(posts);
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              res.status(400).send(_context3.t0._message);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    function myPosts(_x5, _x6) {
      return _myPosts.apply(this, arguments);
    }

    return myPosts;
  }(),
  onePost: function () {
    var _onePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var post;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _models.Post.onePost(req.params.postId);

            case 3:
              post = _context4.sent;
              res.status(200).json({
                post: post
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              res.status(400).send(_context4.t0._message);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    function onePost(_x7, _x8) {
      return _onePost.apply(this, arguments);
    }

    return onePost;
  }(),
  likePost: function () {
    var _likePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var likes;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _models.Post.likedPost(req.user._id, req.body);

            case 3:
              likes = _context5.sent;
              res.status(200).json({
                likes: likes
              });
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              res.status(400).send(_context5.t0._message);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));

    function likePost(_x9, _x10) {
      return _likePost.apply(this, arguments);
    }

    return likePost;
  }(),
  unlikePost: function () {
    var _unlikePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var likes;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _models.Post.unlikedPost(req.user._id, req.body);

            case 3:
              likes = _context6.sent;
              res.status(200).json({
                likes: likes
              });
              _context6.next = 10;
              break;

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              res.status(400).send(_context6.t0._message);

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 7]]);
    }));

    function unlikePost(_x11, _x12) {
      return _unlikePost.apply(this, arguments);
    }

    return unlikePost;
  }(),
  commentPost: function () {
    var _commentPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var comments;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _models.Post.commentedPost(req.user, req.body);

            case 3:
              comments = _context7.sent;
              _context7.next = 6;
              return comments.populate("comments.postedBy", "_id firstName");

            case 6:
              res.status(200).json({
                comments: comments
              });
              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              res.status(400).send(_context7.t0._message);

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 9]]);
    }));

    function commentPost(_x13, _x14) {
      return _commentPost.apply(this, arguments);
    }

    return commentPost;
  }(),
  deletePost: function () {
    var _deletePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
      var post;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _models.Post.deletedPost(req.params.postId);

            case 3:
              post = _context8.sent;

              if (post) {
                _context8.next = 6;
                break;
              }

              return _context8.abrupt("return", res.status(404).json({
                message: "post not found"
              }));

            case 6:
              if (!(post.postedBy.toString() === req.user._id.toString())) {
                _context8.next = 12;
                break;
              }

              _context8.next = 9;
              return post.remove();

            case 9:
              return _context8.abrupt("return", res.json({
                message: "successfully deleted"
              }));

            case 12:
              console.log("not deleted");

            case 13:
              _context8.next = 18;
              break;

            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](0);
              res.status(400).send(_context8.t0._message);

            case 18:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 15]]);
    }));

    function deletePost(_x15, _x16) {
      return _deletePost.apply(this, arguments);
    }

    return deletePost;
  }()
};
var _default = postController;
exports["default"] = _default;