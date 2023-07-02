"use strict";
const {User} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await User.findOne({
      where: {
        email: "user@mail.com",
      },
    });

    await queryInterface.bulkInsert("Education", [
      {
        user_id: "10",
        school_name: "ITB",
        start_date: "10-08-2022",
        graduation_date: "2021",
        major: "Inggris",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: user.id,
        school_name: "Binus",
        start_date: "10-10-2021",
        graduation_date: "2022",
        major: "FSWD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Education", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
