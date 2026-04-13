const {DataTypes} = require("sequelize");

exports.ApplicationPermissionEntity = function (sequelize) {
  return sequelize.define('ApplicationPermission', {
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