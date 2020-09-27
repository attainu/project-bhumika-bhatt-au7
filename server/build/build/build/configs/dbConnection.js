"use strict";

var _mongoose = require("mongoose");

(0, _mongoose.connect)(process.env.ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(function () {
  return console.log("database connected");
})["catch"](function (error) {
  return console.log(error);
});