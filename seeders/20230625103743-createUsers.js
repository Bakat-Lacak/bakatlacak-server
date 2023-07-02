'use strict';
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[
      {
        email: 'user@mail.com',
        password: bcrypt.hashSync("user",salt),
        first_name: 'user',
        last_name: 'pertama',
        phone_number: '08991212121',
        birth_date: new Date("2005-08-09"),
        gender: 'male',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'recruiter@mail.com',
        password: bcrypt.hashSync("recruiter",salt),
        first_name: 'recruiter',
        last_name: 'pertama',
        phone_number: '08991212121',
        birth_date: new Date("2005-08-09"),
        gender: 'male',
        role: 'recruiter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'admin@mail.com',
        password: bcrypt.hashSync("admin",salt),
        first_name: 'admin',
        last_name: 'kedua',
        phone_number: '08991212121',
        birth_date: new Date("2005-08-09"),
        gender: 'male',
        role: 'admin',
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
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
