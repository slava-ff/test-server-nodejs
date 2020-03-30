const db = require("../../models");
const File = db.file;
const Op = db.Sequelize.Op;

const createFile = async (req, res) => {
  const { filename, extension, mimetype, size, downloaddate } = req.fileToSave;

  const file = {
    filename,
    extension,
    mimetype,
    size,
    downloaddate
  };

  await File.create(file)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the File."
      });
    });
};

const findFile = async (req, res) => {
  const { filename } = req.body;

  await File.findByPk(filename)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving File with id=" + filename
      });
    });
};

const deleteFile = async (req, res) => {
  const { id } = req.params;

  await File.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "File was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete File with id=${id}. Maybe File was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete File with id=" + id
      });
    });
};

module.exports = {
  createFile,
  findFile,
  deleteFile
};
