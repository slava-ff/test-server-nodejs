module.exports = (sequelize, Sequelize) => {
  const File = sequelize.define("file", {
    filename: {
      type: Sequelize.STRING
    },
    extension: {
      type: Sequelize.STRING
    },
    mimetype: {
      type: Sequelize.STRING
    },
    size: {
      type: Sequelize.STRING
    },
    downloaddate: {
      type: Sequelize.STRING
    }
  });

  return File;
};
