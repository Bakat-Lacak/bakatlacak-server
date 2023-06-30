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
    await queryInterface.removeColumn("Educations", "user_id", {});
    await queryInterface.removeColumn("Educations", "start_date", {});
    await queryInterface.removeColumn("Educations", "graduation_date", {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn("Educations", "user_id", { type: Sequelize.INTEGER });
    await queryInterface.addColumn("Educations", "start_date", { type: Sequelize.DATE });
    await queryInterface.addColumn("Educations", "graduation_date", { type: Sequelize.DATE });
  },
};
