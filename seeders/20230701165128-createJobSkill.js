'use strict';

const { Skill, JobListing } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const skills = await Skill.findAll()

    const jobList = await JobListing.findAll()

    await queryInterface.bulkInsert('JobSkills', [
      {
        job_listing_id: jobList[0].id, 
        skill_id: skills[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[0].id, 
        skill_id: skills[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[0].id, 
        skill_id: skills[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[0].id, 
        skill_id: skills[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[0].id, 
        skill_id: skills[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[1].id, 
        skill_id: skills[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[1].id, 
        skill_id: skills[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[2].id, 
        skill_id: skills[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[2].id, 
        skill_id: skills[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id, 
        skill_id: skills[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id, 
        skill_id: skills[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id, 
        skill_id: skills[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id, 
        skill_id: skills[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[3].id, 
        skill_id: skills[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[4].id, 
        skill_id: skills[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[4].id, 
        skill_id: skills[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[5].id, 
        skill_id: skills[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[5].id, 
        skill_id: skills[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id, 
        skill_id: skills[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id, 
        skill_id: skills[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id, 
        skill_id: skills[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id, 
        skill_id: skills[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[6].id, 
        skill_id: skills[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[7].id, 
        skill_id: skills[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[7].id, 
        skill_id: skills[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[8].id, 
        skill_id: skills[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[8].id, 
        skill_id: skills[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[9].id, 
        skill_id: skills[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[9].id, 
        skill_id: skills[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[10].id, 
        skill_id: skills[12].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[10].id, 
        skill_id: skills[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[11].id, 
        skill_id: skills[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[11].id, 
        skill_id: skills[21].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[12].id, 
        skill_id: skills[18].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[12].id, 
        skill_id: skills[22].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[13].id, 
        skill_id: skills[16].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[13].id, 
        skill_id: skills[22].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[14].id, 
        skill_id: skills[12].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[14].id, 
        skill_id: skills[23].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[15].id, 
        skill_id: skills[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[15].id, 
        skill_id: skills[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[15].id, 
        skill_id: skills[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[16].id, 
        skill_id: skills[16].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[16].id, 
        skill_id: skills[14].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[16].id, 
        skill_id: skills[12].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[17].id, 
        skill_id: skills[12].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[17].id, 
        skill_id: skills[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[17].id, 
        skill_id: skills[19].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[18].id, 
        skill_id: skills[21].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[18].id, 
        skill_id: skills[20].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[18].id, 
        skill_id: skills[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[19].id, 
        skill_id: skills[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[19].id, 
        skill_id: skills[12].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[19].id, 
        skill_id: skills[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[19].id, 
        skill_id: skills[17].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[20].id, 
        skill_id: skills[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[20].id, 
        skill_id: skills[14].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[20].id, 
        skill_id: skills[19].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[21].id, 
        skill_id: skills[22].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[21].id, 
        skill_id: skills[23].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[22].id, 
        skill_id: skills[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[22].id, 
        skill_id: skills[14].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[22].id, 
        skill_id: skills[19].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[23].id, 
        skill_id: skills[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[23].id, 
        skill_id: skills[14].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[23].id, 
        skill_id: skills[19].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[24].id, 
        skill_id: skills[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[24].id, 
        skill_id: skills[17].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_listing_id: jobList[24].id, 
        skill_id: skills[20].id,
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
    await queryInterface.bulkDelete('JobSkills', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
