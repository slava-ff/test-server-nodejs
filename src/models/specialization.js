"use strict";
module.exports = (sequelize, DataTypes) => {
  const specialization = sequelize.define(
    "specialization",
    {
      userId: DataTypes.INTEGER,
      specialization: DataTypes.STRING
    },
    { timestamps: false }
  );
  return specialization;
};
