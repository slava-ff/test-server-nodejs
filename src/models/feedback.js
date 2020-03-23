"use strict";
module.exports = (sequelize, DataTypes) => {
  const feedback = sequelize.define(
    "feedback",
    {
      toPersonId: DataTypes.INTEGER,
      situation: DataTypes.STRING,
      pros: DataTypes.STRING,
      cons: DataTypes.STRING,
      fromPersonId: DataTypes.INTEGER,
      date: DataTypes.DATE
    },
    { timestamps: false }
  );
  return feedback;
};
