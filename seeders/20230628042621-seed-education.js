"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Education", [
      {
        school_name: "ITB",
        description: "Institut Teknologi Bandung, Kami adalah kampus yang berada di Bandung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        school_name: "Binus",
        description: "Kami adalah kampus yang berada di Jakarta & Bandung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        school_name: "UNPAD",
        description: "Kampus yang cukup berada di daerah Bandung",
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
