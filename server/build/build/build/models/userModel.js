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

var _utils = require("../utils");

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
  (0, _defineProperty2["default"])(this, "signup", function (user) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res, rej) {
        var newUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = user.firstName;
                _context.t1 = user.lastName;
                _context.t2 = user.email;
                _context.next = 5;
                return (0, _utils.hashPassword)(user.password);

              case 5:
                _context.t3 = _context.sent;
                newUser = {
                  firstName: _context.t0,
                  lastName: _context.t1,
                  email: _context.t2,
                  password: _context.t3
                };

                _schemas.userSchema.create(newUser, function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                });

              case 8:
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
};

var _default = new User();

exports["default"] = _default;