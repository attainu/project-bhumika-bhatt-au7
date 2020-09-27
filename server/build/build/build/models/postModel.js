"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _schemas = require("../schemas");

var Post = function Post() {
  (0, _classCallCheck2["default"])(this, Post);
  (0, _defineProperty2["default"])(this, "allPost", function () {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res, rej) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _schemas.postSchema.find({}, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  });
  (0, _defineProperty2["default"])(this, "createPost", function (Req, post) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(res, rej) {
        var newPost;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                newPost = {
                  title: post.title,
                  description: post.description,
                  photo: post.photo,
                  postedBy: Req
                };

                _schemas.postSchema.create(newPost, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    console.log(info);
                    res(info);
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
  (0, _defineProperty2["default"])(this, "myPost", function (id) {
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(res, rej) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _schemas.postSchema.find({
                  postedBy: id
                }, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
  (0, _defineProperty2["default"])(this, "onePost", function (id) {
    return new Promise( /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(res, rej) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _schemas.postSchema.findOne({
                  _id: id
                }, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
  (0, _defineProperty2["default"])(this, "likedPost", function (userId, like) {
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(res, rej) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _schemas.postSchema.findByIdAndUpdate(like.postId, {
                  $push: {
                    likes: userId
                  }
                }, {
                  "new": true
                }, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
  (0, _defineProperty2["default"])(this, "unlikedPost", function (userId, like) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(res, rej) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _schemas.postSchema.findByIdAndUpdate(like.postId, {
                  $pull: {
                    likes: userId
                  }
                }, {
                  "new": true
                }, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                });

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
  (0, _defineProperty2["default"])(this, "commentedPost", function (userId, comment) {
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(res, rej) {
        var newComment;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                newComment = {
                  text: comment.text,
                  postedBy: userId._id
                };

                _schemas.postSchema.findByIdAndUpdate(comment.postId, {
                  $push: {
                    comments: newComment
                  }
                }, {
                  "new": true
                }, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
  (0, _defineProperty2["default"])(this, "deletedPost", function (id) {
    return new Promise( /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(res, rej) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _schemas.postSchema.findOne({
                  _id: id
                }, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                });

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
};

var _default = new Post();

exports["default"] = _default;