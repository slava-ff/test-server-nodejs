const express = require("express");
const { join } = require("path");

const path = tail => join(__dirname, tail);

module.exports = express
  .Router()
  .use("/", express.static(path("../../public")))
  .use("/*", (req, res) => res.sendFile(path("../../public/index.html")));
