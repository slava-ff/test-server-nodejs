const db = require("../../models");
const User = db.user;
const Op = db.Sequelize.Op;

const createUser = async (req, res) => {
  const { id, password } = req.body;

  const user = { id, password };

  await User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

const findUser = async (req, res) => {
  const { id } = req.body;

  await User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

module.exports = {
  createUser,
  findUser,
  deleteUser
};
