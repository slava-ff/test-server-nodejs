const { Router } = require("express");
const { errorProtocol } = require("../helpers/error-helper");

const info = async (req, res) => {
  try {
    console.log("info: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

module.exports = Router().get("/", info);
