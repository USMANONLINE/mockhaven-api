const { DataTypes} = require('sequelize');

exports.ApplicationUserEntity = function (sequelize) {
  return sequelize.define('ApplicationUser', {
    firstName: {
      type: DataTypes.STRING
    },
    surName: {
      type: DataTypes.STRING
    },
    middleName: {
      type: DataTypes.STRING
    }
  });
};