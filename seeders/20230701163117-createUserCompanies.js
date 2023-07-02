'use strict';

const { CompanyProfile, User } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const recruiterAccount1 = await User.findOne({where: {
      email: "recruiter@mail.com"
    }})

    const companyAccount1 = await CompanyProfile.findOne({where: {
      name: "TOKODEPIA"
    }})

    const recruiterAccount2 = await User.findOne({where: {
      email: "admin@mail.com"
    }})

    const companyAccount2 = await CompanyProfile.findOne({where: {
      name: "HACKED"
    }})

    await queryInterface.bulkInsert('UserCompanies', [
      {
        user_id: recruiterAccount1.id,
        company_id: companyAccount1.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: recruiterAccount2.id,
        company_id: companyAccount2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])


    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserCompanies', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
