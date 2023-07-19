'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CompanyProfiles', [
      {
        name: "TOKODEPIA",
        field: "E-commerce",
        description: "Belanja hanya di Tokopedia",
        location: "Jakarta",
        photo: "image.jpg",
        total_employee: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PHOSEE",
        field: "Clothing Apparel",
        description: "Mengikuti trend jaman now",
        location: "Bandung",
        photo: "image.jpg",
        total_employee: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "HACKED",
        field: "Academy",
        description: "Belajar cepat, cepat kerja",
        location: "Yogyakarta",
        photo: "image.jpg",
        total_employee: 50,
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
    await queryInterface.bulkDelete('CompanyProfiles', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
