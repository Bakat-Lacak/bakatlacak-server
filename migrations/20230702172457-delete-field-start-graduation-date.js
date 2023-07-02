'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('UserSkills', 'start_date', {})
    await queryInterface.removeColumn('UserSkills', 'graduation_date', {})
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('UserSkills', 'start_date', { type: Sequelize.DATE})
    await queryInterface.addColumn('UserSkills', 'graduation_date', { type: Sequelize.DATE})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
