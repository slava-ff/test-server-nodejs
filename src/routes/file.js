const { Router } = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { errorProtocol } = require("../helpers/error-helper");
const files = require("../controllers/files.controller.js");

const filesStoragePath = "files-storage";

const multerFilesStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, filesStoragePath);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const multerUpload = multer({ storage: multerFilesStorage });

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
    // const filePath = req.url.substr(1);
    // const readable = fs.createReadStream(filePath);

    // streams??
    // check file exists in DB

    const filename = path.parse(req.files[0].originalname).name;
    const extension = path.parse(req.files[0].originalname).ext;
    const { mimetype, size } = req.files[0];
    const downloaddate = Date.now();

    req.fileToSave = {
      filename,
      extension,
      mimetype,
      size,
      downloaddate
    };

    const result = await files.createFile(req, res);

    return res.status(200).send("file: ", result);
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
  // .use(multer())
  .get("/list", list)
  .get("/:id", id)
  .get("/download/:id ", downloadId)
  .delete("/delete/:id", deleteId)
  .post("/upload", multerUpload.any(), upload)
  // .post("/upload", upload)
  .put("/update/:id", updateId);
