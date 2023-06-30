"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await User.findOne({
      where: {
        email: "pertamax@gmail.com",
      },
    });

    await queryInterface.bulkInsert("Education", [
      {
        id: "4",
        user_id: "10",
        school_name: "ITB",
        start_date: "10-08-2022",
        graduation_date: "2021",
        major: "Inggris",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: id,
        user_id: user_id,
        school_name: school_name,
        start_date: start_date,
        graduation_date: graduation_date,
        major: major,
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
