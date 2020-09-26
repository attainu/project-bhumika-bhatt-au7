"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
                _context.next = 17;
                break;
              }

              _context.next = 7;
              return (0, _utils.comparePassword)(req.body.password, user.password);

            case 7:
              if (!_context.sent) {
                _context.next = 14;
                break;
              }

              token = _jsonwebtoken["default"].sign({
                _id: user._id
              }, process.env.SECRET_KEY);
              _id = user._id, firstName = user.firstName, lastName = user.lastName, email = user.email;
              res.json((0, _defineProperty2["default"])({
                token: token,
                _id: _id,
                firstName: firstName,
                lastName: lastName,
                email: email
              }, "_id", _id));
              console.log(res.json);
              _context.next = 15;
              break;

            case 14:
              res.status(400).send("password did not match!");

            case 15:
              _context.next = 18;
              break;

            case 17:
              res.status(404).send("user not found! please signup first...");

            case 18:
              _context.next = 24;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              res.status(400).send(_context.t0._message);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 20]]);
    }));

    function login(_x, _x2) {
      return _login.apply(this, arguments);
    }

    return login;
  }()
};
var _default = userController;
exports["default"] = _default;