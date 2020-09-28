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

var Profile = function Profile() {
  (0, _classCallCheck2["default"])(this, Profile);
  (0, _defineProperty2["default"])(this, "getUser", function (userName) {
    return new Promise(function (res, rej) {
      _schemas.userSchema.findOne({
        userName: userName
      }, function (err, info) {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  });
  (0, _defineProperty2["default"])(this, "updateUser", function (user) {
    return new Promise(function (res, rej) {
      _schemas.userSchema.updateOne({
        _id: user._id
      }, {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        country: user.country,
        mobile: user.mobile
      }, function (err, info) {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  });
  (0, _defineProperty2["default"])(this, "updateUserPassword", function (user) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res, rej) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _schemas.userSchema;
                _context.t1 = {
                  _id: user._id
                };
                _context.next = 4;
                return (0, _utils.hashPassword)(user.password);

              case 4:
                _context.t2 = _context.sent;
                _context.t3 = {
                  password: _context.t2
                };

                _context.t4 = function (err, info) {
                  if (err) {
                    rej(err);
                  } else {
                    res(info);
                  }
                };

                _context.t0.updateOne.call(_context.t0, _context.t1, _context.t3, _context.t4);

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

var _default = new Profile();

exports["default"] = _default;