const { DataTypes} = require('sequelize');

exports.ApplicationUserEntity = function (sequelize) {
  return sequelize.define('ApplicationUser', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    emailAddress: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};