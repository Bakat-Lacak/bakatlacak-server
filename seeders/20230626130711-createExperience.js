"use strict";
const { User } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await User.findOne({
      where: {
        email: "pertamax@gmail.com",
      },
    });

    await queryInterface.bulkInsert("Experiences", [
      {
        user_id: user.id,
        department: "IT",
        position: "Fullstack",
        industri: "Consultan",
        salary: 70000,
        end_date: new Date(),
        description: "Node Js",
        country: "Jakarta",
      },
      {
        user_id: user.id,
        department: "TU",
        position: "BackEnd",
        industri: "Consultan",
        salary: 70000,
        end_date: new Date(),
        description: "Node Js",
        country: "Jakarta",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
