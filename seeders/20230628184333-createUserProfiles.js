'use strict';

const { User } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const user = await User.findOne({
      where: {
        email: "pertamax@gmail.com",
      },
    });

    await queryInterface.bulkInsert("UserProfiles", [
      {
        user_id: 5,
        resume: "https://katapopuler.com/wp-content/uploads/2020/11/dummy.png",
        portofolio: "https://katapopuler.com/wp-content/uploads/2020/11/dummy.png",
        about_me: "I am a fullstack developer",
        salary_expectation: 7000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        resume: "https://katapopuler.com/wp-content/uploads/2020/11/dummy.png",
        portofolio: "https://katapopuler.com/wp-content/uploads/2020/11/dummy.png",
        about_me: "I am a fullstack developer",
        salary_expectation: 7000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserProfiles', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
