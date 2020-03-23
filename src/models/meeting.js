"use strict";
module.exports = (sequelize, DataTypes) => {
  const meeting = sequelize.define(
    "meeting",
    {
      userId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      status: DataTypes.STRING,
      comment: DataTypes.STRING,
      commentOfEmployee: DataTypes.STRING,
      commentOfTalent: DataTypes.STRING,
      talentAgreed: DataTypes.BOOLEAN
    },
    { timestamps: false }
  );
  return meeting;
};
