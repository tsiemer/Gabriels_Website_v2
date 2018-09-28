'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blogType: {
        type: Sequelize.ENUM('aboutMe', 'myThoughts', 'doneAndDoing', 'foodForThought', 'wayIDoThings')
      },
      title: {
        type: Sequelize.STRING
      },
      headerLink: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      subtitle: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      quote: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Blogs');
  }
};