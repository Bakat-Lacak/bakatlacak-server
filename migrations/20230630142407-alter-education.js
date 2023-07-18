"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("Education", "user_id", {});
    await queryInterface.removeColumn("Education", "start_date", {});
    await queryInterface.removeColumn("Education", "graduation_date", {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn("Education", "user_id", { type: Sequelize.INTEGER });
    await queryInterface.addColumn("Education", "start_date", { type: Sequelize.DATE });
    await queryInterface.addColumn("Education", "graduation_date", { type: Sequelize.DATE });
  },
};
