'use strict';

const { User, Education } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userAccount = await User.findOne({where: {
      email: "user@mail.com"
    }})

    const educationSite = await Education.findOne({where: {
      school_name: "Binus"
    }})

    await queryInterface.bulkInsert('UserEducations', [
      {
          user_id: userAccount.id,
          education_id: educationSite.id,
          start_date: "2010-05-05",
          graduation_date: "2014-05-05",
          major: "Informasi Teknologi",
          createdAt: new Date(),
          updatedAt: new Date(),
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
    await queryInterface.bulkDelete('UserEducations', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
