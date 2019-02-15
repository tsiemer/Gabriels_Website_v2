'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Admins',   
      'isAuthenticated', {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    }
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Admins');
  }
};