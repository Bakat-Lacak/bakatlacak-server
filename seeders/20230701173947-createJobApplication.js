'use strict';

const { User, JobListing } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const jobList = await JobListing.findOne({where: {
      title: "Full-stack Web Developer"
    }})

    const userAccount = await User.findOne({where: {
      email: "user@mail.com"
    }})

    await queryInterface.bulkInsert('JobApplications', [
      {
        user_id: userAccount.id,
        job_listing_id: jobList.id,
        status: 'applied',
        resume: "link:resume",
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
