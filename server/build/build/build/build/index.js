"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("dotenv/config");

require("./configs/dbConnection"); // Database config


var app = (0, _express["default"])();
app.use((0, _express.urlencoded)({
  extended: true
}));
app.use((0, _express.json)());
app.use((0, _cors["default"])()); // Server port

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("server is running on port ".concat(PORT));
}); // Homepage

app.use("/", function (req, res) {
  res.send("connect-x server homepage!");
});