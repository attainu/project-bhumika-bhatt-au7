"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = require("../models");

var _utils = require("../utils");

var userController = {
  login: function () {
    var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var user, token, _id, firstName, lastName, email;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models.User.login(req.body);

            case 3:
              user = _context.sent;

              if (!user) {
                _context.next = 16;
                break;
              }

              _context.next = 7;
              return (0, _utils.comparePassword)(req.body.password, user.password);

            case 7:
              if (!_context.sent) {
                _context.next = 13;
                break;
              }

              token = _jsonwebtoken["default"].sign({
                _id: user._id
              }, process.env.SECRET_KEY);
              _id = user._id, firstName = user.firstName, lastName = user.lastName, email = user.email;
              res.status(200).send({
                token: token,
                firstName: firstName,
                lastName: lastName,
                email: email,
                _id: _id
              });
              _context.next = 14;
              break;

            case 13:
              res.status(400).send("Password did not match!");

            case 14:
              _context.next = 17;
              break;

            case 16:
              res.status(404).send("User not found! Please signup first...");

            case 17:
              _context.next = 23;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              res.status(400).send(_context.t0._message);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 19]]);
    }));

    function login(_x, _x2) {
      return _login.apply(this, arguments);
    }

    return login;
  }(),
  signup: function () {
    var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var user;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _models.User.signup(req.body);

            case 3:
              user = _context2.sent;
              return _context2.abrupt("return", res.status(200).json({
                message: "user created successfully!"
              }));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.dir(_context2.t0);
              res.status(400).send(_context2.t0._message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    function signup(_x3, _x4) {
      return _signup.apply(this, arguments);
    }

    return signup;
  }()
};
var _default = userController;
exports["default"] = _default;