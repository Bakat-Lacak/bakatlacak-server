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

    const jobList = await JobListing.findOne({where: {
      title: "Full-stack Web Developer"
    }})

    await queryInterface.bulkInsert('JobSkills', [
      {
        job_listing_id: jobList.id,
        skill_id: postgres[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList.id,
        skill_id: css[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList.id,
        skill_id: htmls[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList.id,
        skill_id: reacts[1].id,
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
