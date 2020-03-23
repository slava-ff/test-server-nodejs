const { Router } = require("express");
const { errorProtocol } = require("../helpers/error-helper");

const list = async (req, res) => {
  try {
    console.log("list: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

const id = async (req, res) => {
  try {
    console.log("id: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

const downloadId = async (req, res) => {
  try {
    console.log("downloadId: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

const deleteId = async (req, res) => {
  try {
    console.log("deleteId: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

const upload = async (req, res) => {
  try {
    console.log("upload: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

const updateId = async (req, res) => {
  try {
    console.log("updateId: ", req, res);
    return res.status(200).send();
  } catch (error) {
    return errorProtocol(error, res);
  }
};

module.exports = Router()
  .get("/list", list)
  .get("/:id", id)
  .get("/download/:id ", downloadId)
  .delete("/delete/:id", deleteId)
  .post("/upload", upload)
  .put("/update/:id", updateId);
