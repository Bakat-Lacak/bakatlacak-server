'use strict';
const { User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const user = await User.findOne({where: {
      email: "pertamax@gmail.com"
    }})
    await queryInterface.bulkInsert('Skills',[
      {
        name: 'PostgreSQL',
        level: 'beginner',
        user_id: user.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS',
        level: 'advance',
        user_id: user.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML',
        level: 'beginner',
        user_id: user.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React',
        level: 'expert',
        user_id: user.id,
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
    await queryInterface.bulkDelete('Skills', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
