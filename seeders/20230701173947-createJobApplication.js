'use strict';

const { User, JobListing } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const jobList = await JobListing.findAll()

    const userAccount = await User.findAll()

    await queryInterface.bulkInsert('JobApplications', [
      {
        user_id: userAccount[0].id,
        job_listing_id: jobList[0].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount[1].id,
        job_listing_id: jobList[0].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount[2].id,
        job_listing_id: jobList[0].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount[0].id,
        job_listing_id: jobList[1].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount[1].id,
        job_listing_id: jobList[1].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount[2].id,
        job_listing_id: jobList[1].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount[0].id,
        job_listing_id: jobList[2].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount[1].id,
        job_listing_id: jobList[2].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount[2].id,
        job_listing_id: jobList[2].id,
        status: 'applied',
        resume: "link:resume",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
