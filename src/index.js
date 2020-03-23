const express = require("express");
const routes = require("./routes");
var cors = require("cors");

const config = require("config");
const PORT = config.get("port");
const validateToken = require("./helpers/validate-token.js");
const staticHelper = require("./helpers/static.js");

module.exports = express()
  .use(cors())
  .get("/meta/health", (req, res) => res.sendStatus(200))
  .use(express.json())
  .use("/api", validateToken, routes)
  .use("/", staticHelper)
  .listen(PORT, () => console.log(`Server started on :${PORT}`));
