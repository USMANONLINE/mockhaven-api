const {DataTypes} = require("sequelize");

exports.ApplicationRoleEntity = function (sequelize) {
  return sequelize.define('ApplicationRole', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}