'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types',[
      {
        title: "Full-time",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Part-time",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Intern",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Freelance",
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
    await queryInterface.bulkDelete('Types', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
