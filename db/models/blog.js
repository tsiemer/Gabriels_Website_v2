'use strict';

module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    blogType: DataTypes.ENUM('aboutMe', 'myThoughts', 'doneAndDoing', 'foodForThought', 'wayIDoThings'),
    title: DataTypes.STRING,
    headerLink: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    quote: DataTypes.STRING
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};