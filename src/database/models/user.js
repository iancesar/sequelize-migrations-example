"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    firstName: DataTypes.STRING
  }, { freezeTableName: true });
  user.associate = function () {
    // associations can be defined here
  };
  return user;
};