"use strict";
module.exports = (sequelize, DataTypes) => {
  const saco = sequelize.define("saco", {
    firstName: DataTypes.STRING
  }, { freezeTableName: true });
  saco.associate = function () {
    // associations can be defined here
  };
  return saco;
};