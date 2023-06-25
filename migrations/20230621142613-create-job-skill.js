'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_listing_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"JobListings",
          key:"id",
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE",
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Skills",
          key:"id",
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE",
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JobSkills');
  }
};