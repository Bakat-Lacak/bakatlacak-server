'use strict';

const { CompanyProfile, JobListing, Type } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const companyAccount1 = await CompanyProfile.findOne({where: {
      name: "TOKODEPIA"
    }})

    const companyAccount2 = await CompanyProfile.findOne({where: {
      name: "PHOSEE"
    }})

    const companyAccount3 = await CompanyProfile.findOne({where: {
      name: "HACKED"
    }})
    
    const jobs = await queryInterface.bulkInsert('JobListings', [
      {
        title: "Full-stack Web Developer",
        description: "Menguasai front-end dan back-end dengan baik",
        company_id: companyAccount1.id,
        location: "Jakarta",
        salary_start: 6000000,
        salary_end: 12000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Data Analyst",
        description: "Menguasai dasar Python dan dapat bekerja sama dalam tekanan",
        company_id: companyAccount1.id,
        location: "Jakarta",
        salary_start: 5000000,
        salary_end: 11000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "UI/UX Designer",
        description: "Dapat bekerja dalam tekanan dan menggambar dengan penuh hati",
        company_id: companyAccount1.id,
        location: "Sumedang",
        salary_start: 8000000,
        salary_end: 9000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Full-stack Web Developer",
        description: "Menguasai front-end dan back-end dengan baik",
        company_id: companyAccount2.id,
        location: "Jakarta",
        salary_start: 6000000,
        salary_end: 12000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Data Analyst",
        description: "Menguasai dasar Python dan dapat bekerja sama dalam tekanan",
        company_id: companyAccount2.id,
        location: "Jakarta",
        salary_start: 5000000,
        salary_end: 11000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "UI/UX Designer",
        description: "Dapat bekerja dalam tekanan dan menggambar dengan penuh hati",
        company_id: companyAccount2.id,
        location: "Sumedang",
        salary_start: 8000000,
        salary_end: 9000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Full-stack Web Developer",
        description: "Menguasai front-end dan back-end dengan baik",
        company_id: companyAccount3.id,
        location: "Jakarta",
        salary_start: 6000000,
        salary_end: 12000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Data Analyst",
        description: "Menguasai dasar Python dan dapat bekerja sama dalam tekanan",
        company_id: companyAccount3.id,
        location: "Jakarta",
        salary_start: 5000000,
        salary_end: 11000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "UI/UX Designer",
        description: "Dapat bekerja dalam tekanan dan menggambar dengan penuh hati",
        company_id: companyAccount3.id,
        location: "Sumedang",
        salary_start: 8000000,
        salary_end: 9000000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    
    const types = await Type.findAll();
    const fullTime = types[0]
    const partTime = types[1]
    const intern = types[2]
    const freelance = types[3]

    let fullTimeJobs = [jobs[0], jobs[1], jobs[2]]

    let partTimeJobs = [jobs[3], jobs[4], jobs[5]]

    let freelanceJobs = [jobs[6], jobs[7], jobs[8]]

    const fullTimeTypes = fullTimeJobs.map((job) => ({
      type_id: fullTime.id,
      job_listing_id: job.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    const partTimeTypes = partTimeJobs.map((job) => ({
      type_id: partTime.id,
      job_listing_id: job.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    const freelanceTypes = freelanceJobs.map((job) => ({
      type_id: freelance.id,
      job_listing_id: job.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    
    const joinJobTypes = [...fullTimeTypes,...partTimeTypes,...freelanceTypes]

    await queryInterface.bulkInsert("JobTypes", joinJobTypes, {})


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
    await queryInterface.bulkDelete('JobListings', null, {})
    await queryInterface.bulkDelete('JobTypes', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
