module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.STRING,
      autoIncrement: false,
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
