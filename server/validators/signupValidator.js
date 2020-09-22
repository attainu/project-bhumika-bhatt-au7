import { check, body, validationResult } from "express-validator";

import { userSchema } from "../schemas";

const signupValidator = [
  check("firstName")
    .notEmpty()
    .bail()
    .withMessage("First name cannot be empty")
    .isAlpha()
    .bail()
    .withMessage("First name should contains only alphabets(a-z, A-Z)")
    .isLength({ min: 3 })
    .bail()
    .withMessage("First name should contains at least 3 characters")
    .isLength({ max: 100 })
    .bail()
    .withMessage("First name should not contains more than 50 characters"),

  check("lastName")
    .if(body("lastname").exists({ checkFalsy: true }))
    .isAlpha()
    .bail()
    .withMessage("Last name should contains only alphabets(a-z, A-Z)")
    .isLength({ min: 3 })
    .bail()
    .withMessage("Last name should contains at least 3 characters")
    .isLength({ max: 100 })
    .bail()
    .withMessage("Last name should not contains more than 50 characters"),

  check("email")
    .notEmpty()
    .bail()
    .withMessage("Email cannot be empty")
    .isEmail()
    .bail()
    .withMessage("Please enter a valid email"),
  body("email").custom((value) => {
    return userSchema.findOne({ email: value }).then((user) => {
      if (user) return Promise.reject("Email already exists!");
    });
  }),

  check("password")
    .not()
    .isEmpty()
    .bail()
    .withMessage("Password cannot be empty")
    .isAlphanumeric()
    .bail()
    .withMessage(
      "Password should contains only alpha-numeric characters (a-z, A-Z, 0-9)"
    )
    .isLength({ min: 6 })
    .bail()
    .withMessage("Password should contains at least 6 characters")
    .isLength({ max: 20 })
    .bail()
    .withMessage("Password should not contains more than 25 characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.errors[0].msg);
    }
    return next();
  },
];

export default signupValidator;
