'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobListings', {
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
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"CompanyProfiles",
          key:"id",
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE",
      },
      location: {
        type: Sequelize.STRING
      },
      salary_start: {
        type: Sequelize.INTEGER
      },
      salary_end: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('JobListings');
  }
};