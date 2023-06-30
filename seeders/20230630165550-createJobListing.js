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
    
    let jobs = await queryInterface.bulkInsert('JobListings', [
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

    jobs = [jobs[0],jobs[1],jobs[2]]

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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
