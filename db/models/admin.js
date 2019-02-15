'use strict';
module.exports = (sequelize, DataTypes) => {
  var Admin = sequelize.define('Admin', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
     type: DataTypes.ENUM('GKrizin', 'TSiemer', 'DNarveson'),
     allowNull: false
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },

    isAuthenticated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};