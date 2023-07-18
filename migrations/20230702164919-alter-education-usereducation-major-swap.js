'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("UserEducations", "major", { type: Sequelize.STRING });
    await queryInterface.addColumn("Education", "description", { type:  Sequelize.STRING});
    await queryInterface.removeColumn("Education", "major", {});
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("UserEducations", "major", {});
    await queryInterface.removeColumn("Education", "description", {});
    await queryInterface.addColumn("Education", "major", { type: Sequelize.STRING });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
