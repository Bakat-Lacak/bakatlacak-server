'use strict';

const { Skill, JobListing } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const skills = await Skill.findAll()
    const postgres = [skills[0],skills[1],skills[2]]
    const css = [skills[3],skills[4],skills[5]]
    const htmls = [skills[6],skills[7],skills[8]]
    const reacts = [skills[9],skills[10],skills[11]]
    const communicate = [skills[12],skills[13],skills[14]]
    const design = [skills[15],skills[16],skills[17]]
    const python = [skills[18],skills[19],skills[20]]


    const jobList = await JobListing.findAll()

    await queryInterface.bulkInsert('JobSkills', [
      {
        job_listing_id: jobList[0].id, 
        skill_id: postgres[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[0].id,
        skill_id: css[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[0].id,
        skill_id: htmls[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[0].id,
        skill_id: reacts[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id,
        skill_id: postgres[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id,
        skill_id: css[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id,
        skill_id: htmls[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id,
        skill_id: reacts[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id,
        skill_id: postgres[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id,
        skill_id: css[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id,
        skill_id: htmls[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id,
        skill_id: reacts[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[1].id,
        skill_id: python[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[4].id,
        skill_id: python[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[7].id,
        skill_id: python[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[2].id,
        skill_id: design[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[5].id,
        skill_id: design[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[8].id,
        skill_id: design[0].id,
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
    await queryInterface.bulkDelete('JobSkills', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
