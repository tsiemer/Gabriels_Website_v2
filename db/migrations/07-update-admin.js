'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Admins',   
      'id', {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    }
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Admins');
  }
};