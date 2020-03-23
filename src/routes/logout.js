const { Router } = require("express");
const { errorProtocol } = require("../helpers/error-helper");

const logout = async (req, res) => {
  try {
    console.log("logout: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

module.exports = Router().get("/", logout);
