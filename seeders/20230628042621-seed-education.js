"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Education", [
      {
        school_name: "Institut Teknologi Bandung",
        description: "Institut Teknologi Bandung (ITB) merupakan sekolah tinggi teknik pertama di Indonesia yang didirikan pada tanggal 2 Maret 1959 di Jawa Barat yang mengemban misi pengabdian ilmu pengetahuan dan teknologi untuk memajukan Indonesia.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        school_name: "Binus University",
        description: "A World-class university fostering and empowering the society in building and serving the nation.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        school_name: "Universitas Padjadjaran",
        description: "Universitas Padjadjaran atau dikenal dengan singkatan Unpad merupakan salah satu perguruan tinggi negeri yang ada di Indonesia. Unpad berdiri pada 11 September 1957, dengan lokasi kampus di Bandung.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        school_name: "Universitas Gadjah Mada",
        description: "Universitas Gadjah Mada sebagai pelopor perguruan tinggi nasional berkelas dunia yang unggul dan inovatif, mengabdi kepada kepentingan bangsa dan kemanusiaan dijiwai nilai-nilai budaya bangsa berdasarkan Pancasila.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        school_name: "IPB University",
        description: "Inspiring Innovation with Integrity in Agriculture, Ocean, Biosciences for a Sustainable World.",
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
