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
        industry: "Consultan",
        salary: 70000,
        end_date: new Date(),
        description: "Node Js",
        country: "Jakarta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: user.id,
        department: "TU",
        position: "BackEnd",
        industry: "Consultan",
        salary: 70000,
        end_date: new Date(),
        description: "Node Js",
        country: "Jakarta",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Experiences", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
