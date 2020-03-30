const { Router } = require("express");
const { errorProtocol } = require("../helpers/error-helper");
const users = require("../controllers/users.controller.js");

const validateEmailOrPhone = input => {
  const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const rePhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$/;
  const validEmail = reEmail.test(input);
  const validPhone = rePhone.test(input);

  return validEmail || validPhone;
};

const signup = async (req, res) => {
  try {
    console.log("signup");
    const isValidUsername = validateEmailOrPhone(req.body.id);

    if (!isValidUsername) {
      return res.status(400).send("Email or Phone number is invalid");
    }

    const result = await users.createUser(req, res);

    return res.status(200).send("user: ", result);
  } catch (error) {
    return errorProtocol(error, res);
  }
};

module.exports = Router().post("/", signup);
