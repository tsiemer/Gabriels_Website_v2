'use strict';

module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    subtitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};