'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('UserProfiles', 'photo', {type: Sequelize.STRING})
    await queryInterface.removeColumn('Users', 'photo', {})
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('UserProfiles', 'photo', {})
    await queryInterface.addColumn('Users', 'photo', {type: Sequelize.STRING})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
