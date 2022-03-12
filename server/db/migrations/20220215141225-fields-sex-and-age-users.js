'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  return [ queryInterface.addColumn(
              'Users',
              'sex',
              Sequelize.STRING
              ),
           queryInterface.addColumn(
              'Users',
              'age',
              Sequelize.INTEGER
          )]

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
