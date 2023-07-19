"use strict";

const { User, Education } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userAccount = await User.findOne({
      where: {
        email: "user@mail.com",
      },
    });

    const ipb = await Education.findOne({
      where: {
        school_name: "IPB University",
      },
    });

    const itb = await Education.findOne({
      where: {
        school_name: "Institut Teknologi Bandung",
      },
    });

    const sma = await Education.findOne({
      where: {
        school_name: "SMK 4 Negeri Bandung",
      },
    });

    const smp = await Education.findOne({
      where: {
        school_name: "SMP Alfa Centauri",
      },
    });

    const sd = await Education.findOne({
      where: {
        school_name: "SD Taruna Bakti",
      },
    });

    await queryInterface.bulkInsert("UserEducations", [
      {
        user_id: userAccount.id,
        education_id: ipb.id,
        start_date: "2019-05-05",
        graduation_date: "2020-05-05",
        major: "Pertanian",
        degree: "S1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: userAccount.id,
        education_id: itb.id,
        start_date: "2015-05-05",
        graduation_date: "2019-05-05",
        major: "Geodesi",
        degree: "D3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: userAccount.id,
        education_id: sma.id,
        start_date: "2012-05-05",
        graduation_date: "2015-05-05",
        major: "",
        degree: "SMA/SMK",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: userAccount.id,
        education_id: smp.id,
        start_date: "2009-05-05",
        graduation_date: "2012-05-05",
        major: "",
        degree: "SMP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: userAccount.id,
        education_id: sd.id,
        start_date: "2003-05-05",
        graduation_date: "2009-05-05",
        major: "",
        degree: "SD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
    await queryInterface.bulkDelete("UserEducations", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
