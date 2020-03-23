const { Router } = require("express");
const { errorProtocol } = require("../helpers/error-helper");

const signin = async (req, res) => {
  try {
    console.log("signin: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

const newToken = async (req, res) => {
  try {
    console.log("newToken: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

module.exports = Router()
  .post("/", signin)
  .post("/new_token", newToken);
