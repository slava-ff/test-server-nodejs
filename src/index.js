const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
var cors = require("cors");

const config = require("config");
const PORT = config.get("port");
const validateToken = require("./helpers/validate-token.js");
const staticHelper = require("./helpers/static.js");

const db = require("../models");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

module.exports = express()
  .use(cors())
  .get("/meta/health", (req, res) => res.sendStatus(200))
  .use(bodyParser.json())
  // .use("/api", validateToken, routes)
  .use("/api", routes)
  .use("/", staticHelper)
  .listen(PORT, () => console.log(`Server started on :${PORT}`));
