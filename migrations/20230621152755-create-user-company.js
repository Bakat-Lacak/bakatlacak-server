'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserCompanies', {
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
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"CompanyProfiles",
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
    await queryInterface.dropTable('UserCompanies');
  }
};