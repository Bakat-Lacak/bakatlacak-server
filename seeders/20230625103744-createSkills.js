'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Skills',[
      {
        name: 'PostgreSQL',
        level: 'beginner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PostgreSQL',
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PostgreSQL',
        level: 'expert',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS',
        level: 'beginner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS',
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS',
        level: 'expert',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML',
        level: 'beginner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML',
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML',
        level: 'expert',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React',
        level: 'beginner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React',
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React',
        level: 'expert',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Communication',
        level: 'beginner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Communication',
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Communication',
        level: 'expert',
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
    await queryInterface.bulkDelete('Skills', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
