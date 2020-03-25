const { Router } = require("express");
const { errorProtocol } = require("../helpers/error-helper");
const users = require("../controllers/users.controller.js");

const signup = async (req, res) => {
  try {
    console.log("signup: ", req, res);
    users.createUser(req, res);

    const user = users.findUser(req, res);

    return res.status(200).send("user: ", user);
  } catch (error) {
    return errorProtocol(error, res);
  }
};

module.exports = Router().post("/", signup);
