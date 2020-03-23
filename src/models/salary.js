"use strict";
module.exports = (sequelize, DataTypes) => {
  const salary = sequelize.define(
    "salary",
    {
      userId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      sum: DataTypes.INTEGER,
      date: DataTypes.DATE
    },
    { timestamps: false }
  );
  return salary;
};
