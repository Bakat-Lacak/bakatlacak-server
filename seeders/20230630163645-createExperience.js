'use strict';

const { User } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userAccount = await User.findOne({
      where: {
        email: "user@mail.com"
      }
    })

    await queryInterface.bulkInsert('Experiences', [
      {
        user_id: userAccount.id,
        company: "PT. Sejahtera",
        department: "Delivery System",
        position: "Supervisor Area",
        industry: "Shipment",
        salary: 4500000,
        start_date: "2014-05-05",
        end_date: "2016-05-05",
        description: "Memastikan semua operasi bisnis berjalan dengan baik",
        country: "Indonesia",
        state: "Jawa Barat",
        city: "Bandung",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount.id,
        company: "PT. Hutan Bersama",
        department: "Agroculture",
        position: "Specialist Umbi",
        industry: "Pertanian",
        salary: 8000000,
        start_date: "2012-05-05",
        end_date: "2014-05-05",
        description: "Menjaga dan melestarikan hingga mengembangbiakan genetik baru guna mencapai hasil tani yang maksimal",
        country: "Indonesia",
        state: "Sumatera Utara",
        city: "Medan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: userAccount.id,
        company: "PT. Penjualan",
        department: "Retail",
        position: "Admin Gudang",
        industry: "Elektronik",
        salary: 3000000,
        start_date: "2010-05-05",
        end_date: "2012-05-05",
        description: "Eksekusi metode FIFO, Audit setiap product yang masuk dan menjaga dari tindak kriminalitas",
        country: "Indonesia",
        state: "Bali",
        city: "Denpasar",
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
    await queryInterface.bulkDelete('Experiences', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
