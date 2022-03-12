'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Jack',
        lastName: 'White',
        email: 'tmr@gmail.com',
        password: bcrypt.hashSync('mag2000', 10),
        avatar: '',
      },
      {
        firstName: 'Dave',
        lastName: 'Grohl',
        email: 'ff@gmail.com',
        password: bcrypt.hashSync('marigold1990', 10),
        avatar: '',
      },
      {
        firstName: 'John',
        lastName: 'Frusciante',
        email: 'rhcp@gmail.com',
        password: bcrypt.hashSync('california2000',10),
        avatar: '',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

      await queryInterface.bulkDelete('Users', null, {});
  }
};
