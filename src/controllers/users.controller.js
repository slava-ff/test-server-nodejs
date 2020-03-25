const db = require("../../models");
const User = db.users;
const Op = db.Sequelize.Op;

const createUser = (req, res) => {
  const { username, password } = req.body;

  const user = { username, password };

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

const findUser = (req, res) => {
  const { username } = req.body;

  User.findByPk(username)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + username
      });
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  User.destroy({
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
