const { Router } = require("express");
const { errorProtocol } = require("../helpers/error-helper");

const signup = async (req, res) => {
  try {
    console.log("signup: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

module.exports = Router().post("/", signup);
