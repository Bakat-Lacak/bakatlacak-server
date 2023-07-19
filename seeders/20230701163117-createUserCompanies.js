'use strict';

const { CompanyProfile, User } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const recruiterAccount1 = await User.findOne({where: {
      email: "recruiter@mail.com"
    }})
    
    const recruiterAccount2 = await User.findOne({where: {
      email: "recruiter1@mail.com"
    }})
    
    const com = await CompanyProfile.findAll()

    const firstList = [com[0],com[1],com[2],com[3],com[4],com[5],com[6],com[7],com[8],com[9],com[10],com[11]]

    const secondList = [com[12],com[13],com[14],com[15],com[16],com[17],com[18],com[19],com[20],com[21],com[22],com[23],com[24]]

    const userCompaniesList1 = firstList.map((list) => ({
      user_id: recruiterAccount1.id,
      company_id: list.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    const userCompaniesList2 = secondList.map((list) => ({
      user_id: recruiterAccount2.id,
      company_id: list.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    const joinList = [...userCompaniesList1,...userCompaniesList2]

    await queryInterface.bulkInsert('UserCompanies', joinList, {})


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
