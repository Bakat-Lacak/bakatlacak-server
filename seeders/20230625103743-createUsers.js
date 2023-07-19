"use strict";
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: 'user@mail.com',
        password: bcrypt.hashSync("user",salt),
        first_name: 'Andika',
        last_name: 'Pratista',
        phone_number: '085122243331',
        birth_date: new Date("2005-08-09"),
        gender: "male",
        role: "user",
        address: "SUMMARECON GEDEBAGE BANDUNG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user1@mail.com',
        password: bcrypt.hashSync("user1",salt),
        first_name: 'Rahma',
        last_name: 'Ambarita',
        phone_number: '081235678432',
        birth_date: new Date("2003-08-09"),
        gender: "female",
        role: "user",
        address: "PERMATA HIJAU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'recruiter@mail.com',
        password: bcrypt.hashSync("recruiter",salt),
        first_name: 'Johm',
        last_name: 'Poe',
        phone_number: '087727857876',
        birth_date: new Date("2001-08-09"),
        gender: 'male',
        role: 'recruiter',
        address: "SUMMARECON BEKASI",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'recruiter1@mail.com',
        password: bcrypt.hashSync("recruiter1",salt),
        first_name: 'Pah',
        last_name: 'Tie',
        phone_number: '0811224563',
        birth_date: new Date("2000-08-09"),
        gender: 'female',
        role: 'recruiter',
        address: "PERMATA KUNING",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'admin@mail.com',
        password: bcrypt.hashSync("admin",salt),
        first_name: 'Admin',
        last_name: 'Admin',
        phone_number: '08991212121',
        birth_date: new Date("2005-08-09"),
        gender: 'male',
        role: 'admin',
        address: "SUMMARECON JAKARTA",
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
