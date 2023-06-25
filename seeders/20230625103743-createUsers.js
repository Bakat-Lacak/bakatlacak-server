'use strict';
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[
      {
        email: 'pertamax@gmail.com',
        password: bcrypt.hashSync("pertamax",salt),
        first_name: 'pertama',
        last_name: 'kedua',
        phone_number: '08991212121',
        birth_date: new Date("2005-08-09"),
        gender: 'male',
        role: 'user',
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
