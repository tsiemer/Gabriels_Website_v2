'use strict';

module.exports = (sequelize, DataTypes) => {
  var Network = sequelize.define('Network', {
    clientName: DataTypes.STRING,
    businessName: DataTypes.STRING,
    roleAtBusiness: DataTypes.STRING,
    businessDescription: DataTypes.STRING,
    notes: DataTypes.TEXT,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Network.associate = function(models) {
    // associations can be defined here
  };
  return Network;
};