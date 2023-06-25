'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobApplications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Users",
          key:"id",
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE",
      },
      joblisting_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"JobListings",
          key:"id",
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE",
      },
      status: {
        type: Sequelize.STRING
      },
      resume: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('JobApplications');
  }
};