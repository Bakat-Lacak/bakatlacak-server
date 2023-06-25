'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Types",
          key:"id",
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE",
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
    await queryInterface.dropTable('JobTypes');
  }
};