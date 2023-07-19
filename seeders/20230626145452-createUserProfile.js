'use strict';

const { User } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userAccount = await User.findOne({where: {
      email: "user@mail.com"
    }})
    
    const recruiterAccount = await User.findOne({where: {
      email: "recruiter@mail.com"
    }})

    await queryInterface.bulkInsert('UserProfiles', [
      {
        user_id: userAccount.id,
        resume: 'https://katapopuler.com/wp-content/uploads/2020/11/dummy.png',
        portofolio: 'https://katapopuler.com/wp-content/uploads/2020/11/dummy.png',
        about_me: "Antusias dan penuh semangat",
        salary_expectation: 8000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: recruiterAccount.id,
        resume: 'https://katapopuler.com/wp-content/uploads/2020/11/dummy.png',
        portofolio: 'https://katapopuler.com/wp-content/uploads/2020/11/dummy.png',
        about_me: "Energic, work-a-holic and honesty",
        salary_expectation: 8000000,
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
    await queryInterface.bulkDelete('UserProfiles', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
