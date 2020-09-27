"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _schemas = require("../schemas");

var signupValidator = [(0, _expressValidator.check)("firstName").notEmpty().bail().withMessage({
  message: "First name cannot be empty"
}).isAlpha().bail().withMessage("First name should contains only alphabets(a-z, A-Z)").isLength({
  min: 3
}).bail().withMessage("First name should contains at least 3 characters").isLength({
  max: 100
}).bail().withMessage("First name should not contains more than 50 characters"), (0, _expressValidator.check)("lastName")["if"]((0, _expressValidator.body)("lastname").exists({
  checkFalsy: true
})).isAlpha().bail().withMessage("Last name should contains only alphabets(a-z, A-Z)").isLength({
  min: 3
}).bail().withMessage("Last name should contains at least 3 characters").isLength({
  max: 100
}).bail().withMessage("Last name should not contains more than 50 characters"), (0, _expressValidator.check)("email").notEmpty().bail().withMessage("Email cannot be empty").isEmail().bail().withMessage("Please enter a valid email"), (0, _expressValidator.body)("email").custom(function (value) {
  return _schemas.userSchema.findOne({
    email: value
  }).then(function (user) {
    if (user) return Promise.reject("Email already exists!");
  });
}), (0, _expressValidator.check)("password").not().isEmpty().bail().withMessage("Password cannot be empty").isAlphanumeric().bail().withMessage("Password should contains only alpha-numeric characters (a-z, A-Z, 0-9)").isLength({
  min: 6
}).bail().withMessage("Password should contains at least 6 characters").isLength({
  max: 20
}).bail().withMessage("Password should not contains more than 25 characters"), function (req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.errors[0].msg
    });
  }

  return next();
}];
var _default = signupValidator;
exports["default"] = _default;