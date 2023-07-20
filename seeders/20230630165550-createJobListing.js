'use strict';

const { CompanyProfile, JobListing, Type } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const companyAccount = await CompanyProfile.findAll()
    
    const jobs = await queryInterface.bulkInsert('JobListings', [
      {
        title: "Full-stack Web Developer",
        description: "Menguasai front-end dan back-end dengan baik",
        company_id: companyAccount[0].id,
        location: "Jakarta",
        salary_start: 5000000,
        salary_end: 6000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Data Analyst",
        description: "Menguasai dasar Python dan dapat bekerja sama dalam tekanan",
        company_id: companyAccount[1].id,
        location: "Bandung",
        salary_start: 5000000,
        salary_end: 6000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "UI/UX Designer",
        description: "Dapat bekerja dalam tekanan dan menggambar dengan penuh hati",
        company_id: companyAccount[2].id,
        location: "Jakarta",
        salary_start: 8000000,
        salary_end: 9000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Full-stack Web Dev",
        description: "Menguasai front-end dan back-end dengan baik",
        company_id: companyAccount[3].id,
        location: "Cirebon",
        salary_start: 6000000,
        salary_end: 7000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Junior Data Analyst",
        description: "Menguasai dasar Python dan dapat bekerja sama dalam tekanan",
        company_id: companyAccount[4].id,
        location: "Jakarta",
        salary_start: 5000000,
        salary_end: 7000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "UI Designer",
        description: "Dapat bekerja dalam tekanan dan menggambar dengan penuh hati",
        company_id: companyAccount[5].id,
        location: "Sukabumi",
        salary_start: 8000000,
        salary_end: 9000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Junior Full-stack",
        description: "Menguasai front-end dan back-end dengan baik",
        company_id: companyAccount[6].id,
        location: "Jakarta",
        salary_start: 6000000,
        salary_end: 9000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Senior Data Analyst",
        description: "Menguasai dasar Python dan dapat bekerja sama dalam tekanan",
        company_id: companyAccount[7].id,
        location: "Bali",
        salary_start: 5000000,
        salary_end: 7000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "UX Designer",
        description: "Dapat bekerja dalam tekanan dan menggambar dengan penuh hati",
        company_id: companyAccount[8].id,
        location: "Jakarta",
        salary_start: 8000000,
        salary_end: 9000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Event Manager",
        description: "Merencanakan, dan melaksanakan acara dengan sukses. Bertanggung jawab atas semua aspek logistik, anggaran, promosi, dan koordinasi acara. Memimpin tim dengan efektif, menjaga komunikasi yang baik dengan mitra, klien, dan vendor.",
        company_id: companyAccount[9].id,
        location: "Surabaya",
        salary_start: 10000000,
        salary_end: 13000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Supervisor Cabang",
        description: "Mengawasi operasional cabang, memastikan kepatuhan, mencapai target, memimpin tim, mengelola risiko, dan memberikan layanan pelanggan unggul..",
        company_id: companyAccount[10].id,
        location: "Malang",
        salary_start: 11000000,
        salary_end: 13000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bank Teller",
        description: "Melayani nasabah dengan cepat, akurat, dan ramah. Memproses transaksi keuangan, mengelola kas, memberikan informasi produk dan layanan, dan memastikan kepatuhan terhadap kebijakan dan prosedur bank.",
        company_id: companyAccount[11].id,
        location: "Jakarta",
        salary_start: 5000000,
        salary_end: 6000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Sales Motorist",
        description: "Mempromosikan dan menjual produk tembakau kepada pelanggan. Membangun hubungan pelanggan yang kuat, mencapai target penjualan, memberikan penjelasan produk yang jelas, dan memastikan kepatuhan terhadap peraturan dan kebijakan yang berlaku.",
        company_id: companyAccount[12].id,
        location: "Medan",
        salary_start: 5000000,
        salary_end: 6000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Merchandiser",
        description: "Menyusun dan mengatur tampilan produk makanan cepat saji, mengelola stok, memastikan ketersediaan produk, meningkatkan visibilitas, dan membangun hubungan dengan pemilik toko.",
        company_id: companyAccount[13].id,
        location: "Pontianak",
        salary_start: 6000000,
        salary_end: 6500000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Security Officer",
        description: "Melindungi properti dan orang, menjaga keamanan dan ketertiban, melakukan patroli, mengamankan area, mengatasi kejadian darurat, dan berkomunikasi dengan tim keamanan dan petugas terkait.",
        company_id: companyAccount[14].id,
        location: "Pontianak",
        salary_start: 4000000,
        salary_end: 500000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Area Cordinator Jabar",
        description: "Mengkoordinasikan operasional dan tim di provinsi, memastikan pencapaian target, melaksanakan strategi pemasaran, membangun hubungan dengan mitra, memantau kinerja cabang, dan memastikan kepatuhan terhadap kebijakan perusahaan.",
        company_id: companyAccount[15].id,
        location: "Bandung",
        salary_start: 9000000,
        salary_end: 1500000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Marketing Communication",
        description: "Merencanakan dan melaksanakan strategi komunikasi pemasaran, menciptakan konten promosi yang kreatif, mengelola media sosial, merancang kampanye, membangun hubungan dengan media, dan mengukur efektivitas komunikasi pemasaran.",
        company_id: companyAccount[16].id,
        location: "Jakarta",
        salary_start: 7000000,
        salary_end: 800000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Trainer Galaxy",
        description: "Melatih karyawan dalam pengetahuan produk, proses bisnis, dan keterampilan karyawan. Merancang dan memberikan pelatihan yang efektif, mengembangkan materi pelatihan, dan memastikan pemahaman yang mendalam terkait produk dan layanan perusahaan.",
        company_id: companyAccount[17].id,
        location: "Pangandaran",
        salary_start: 8000000,
        salary_end: 900000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Electronics Consultant",
        description: "Menjual produk elektronik, membangun hubungan dengan pelanggan, mencapai target penjualan, memberikan penjelasan produk yang komprehensif, dan memberikan layanan pelanggan yang unggul.",
        company_id: companyAccount[18].id,
        location: "Jakarta",
        salary_start: 4500000,
        salary_end: 5000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Head Store",
        description: "Bertanggung jawab atas operasional toko smartphone, mencapai target penjualan, memimpin tim, mengelola stok, memberikan layanan pelanggan yang superior, dan mengembangkan strategi pemasaran untuk meningkatkan kinerja toko.",
        company_id: companyAccount[19].id,
        location: "Manado",
        salary_start: 6000000,
        salary_end: 7000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Beauty Ambassador",
        description: "Mengrepresentasikan merek kecantikan, memberikan saran ahli tentang produk, melakukan demonstrasi, meningkatkan penjualan, membangun hubungan dengan pelanggan, dan memberikan pengalaman berbelanja yang menyenangkan dan informatif.",
        company_id: companyAccount[20].id,
        location: "Palembang",
        salary_start: 6000000,
        salary_end: 7000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Kurir Product",
        description: "Bertanggung jawab untuk mengirim paket dengan mobil, menjaga ketepatan waktu pengiriman, mengelola dokumen pengiriman, dan menjaga keamanan serta kondisi paket yang dikirim.",
        company_id: companyAccount[21].id,
        location: "Jakarta",
        salary_start: 5000000,
        salary_end: 5000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Beauty Ambassador",
        description: "Mengrepresentasikan merek kecantikan, memberikan saran ahli tentang produk, melakukan demonstrasi, meningkatkan penjualan, membangun hubungan dengan pelanggan, dan memberikan pengalaman berbelanja yang menyenangkan dan informatif.",
        company_id: companyAccount[22].id,
        location: "Bandung",
        salary_start: 6000000,
        salary_end: 7000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Beauty Ambassador",
        description: "Mengrepresentasikan merek kecantikan, memberikan saran ahli tentang produk, melakukan demonstrasi, meningkatkan penjualan, membangun hubungan dengan pelanggan, dan memberikan pengalaman berbelanja yang menyenangkan dan informatif.",
        company_id: companyAccount[23].id,
        location: "Malang",
        salary_start: 6000000,
        salary_end: 7000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Project Cordinator",
        description: "Mengkoordinasikan proyek survei, merencanakan jadwal, mengatur tim lapangan, mengumpulkan dan menganalisis data, dan menyajikan hasil survei secara efektif.",
        company_id: companyAccount[24].id,
        location: "Bandung",
        salary_start: 6000000,
        salary_end: 7000000,
        limit_date: "2023-08-08",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true})
    
    const types = await Type.findAll();
    const fullTime = types[0]
    const partTime = types[1]
    const intern = types[2]
    const freelance = types[3]

    let fullTimeJobs = [jobs[1], jobs[2],jobs[3], jobs[4], jobs[5],jobs[6], jobs[7], jobs[24]]

    let partTimeJobs = [jobs[8], jobs[9], jobs[10],jobs[11], jobs[12],jobs[14], jobs[15]]

    let freelanceJobs = [jobs[16], jobs[17], jobs[18], jobs[20], jobs[21],jobs[22], jobs[23]]

    let internJobs = [jobs[0], jobs[13], jobs[19]]

    const fullTimeTypes = fullTimeJobs.map((job) => ({
      type_id: fullTime.id,
      job_listing_id: job.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    const partTimeTypes = partTimeJobs.map((job) => ({
      type_id: partTime.id,
      job_listing_id: job.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    const freelanceTypes = freelanceJobs.map((job) => ({
      type_id: freelance.id,
      job_listing_id: job.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    const internTypes = internJobs.map((job) => ({
      type_id: intern.id,
      job_listing_id: job.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    
    const joinJobTypes = [...fullTimeTypes,...partTimeTypes,...freelanceTypes,...internTypes]

    await queryInterface.bulkInsert("JobTypes", joinJobTypes, {})


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
    await queryInterface.bulkDelete('JobListings', null, {})
    await queryInterface.bulkDelete('JobTypes', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
