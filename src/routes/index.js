const { Router } = require("express");
const signup = require("./signup");
const signin = require("./signin");
const logout = require("./logout");
const info = require("./info");
const file = require("./file");

module.exports = Router()
  .use("/signup", signup)
  .use("/signin", signin)
  .use("/logout", logout)
  .use("/info", info)
  .use("/file", file);
