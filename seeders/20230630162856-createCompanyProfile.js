'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CompanyProfiles', [
      {
        name: "Tokopedia",
        field: "Technology, Information and Internet",
        description: "We are an Indonesian tech company that creates opportunities and helps everyone achieve more.",
        location: "Jakarta",
        total_employee: 7900,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT BFI Finance Indonesia, Tbk",
        field: "Financial Services",
        description: "BFI Finance is one of the oldest multifinance companies in Indonesia with more than 300 branches spread around Indonesia",
        location: "Tangerang",
        total_employee: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Shopee",
        field: "Technology, Information and Internet",
        description: "Make an impact to millions of users across the globe, with us.",
        location: "Bandung",
        total_employee: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rakamin Academy",
        field: "Higher Education",
        description: "Akselerasi Karir di Bidang Teknologi Melalui Pendidikan Terintegrasi",
        location: "Jakarta",
        total_employee: 280,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Bank Central Asia Tbk (BCA)",
        field: "Banking",
        description: "Berdiri sejak tahun 1957, menjadi Bank swasta terbesar di Indonesia, BCA berkomitmen untuk selalu memahami beragam kebutuhan dan memberikan solusi finansial yang tepat demi tercapainya kepuasan optimal bagi nasabah.",
        location: "Banten",
        total_employee: 8700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT. BANK NEGARA INDONESIA (Persero) Tbk.",
        field: "Banking",
        description: "Menjadi Lembaga Keuangan yang unggul dalam layanan dan kinerja secara berkelanjutan.",
        location: "Semarang",
        total_employee: 9800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Bank Mandiri (Persero) Tbk.",
        field: "Banking",
        description: "Lead Indonesia, Prosper The Nation",
        location: "Yogyakarta",
        total_employee: 7600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Bank Rakyat Indonesia (Persero) Tbk",
        field: "Banking",
        description: "Towards The Most Valuable Banking Group in Southeast Asia & Champion of Financial Inclusion",
        location: "Solo",
        total_employee: 8900,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Pertamina (Persero)",
        field: "Oil and Gas",
        description: "PT Pertamina (Persero) is an Indonesian state-owned enterprise, which is engaged in the integrated energy in Indonesia.",
        location: "Kediri",
        total_employee: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT DJARUM",
        field: "Tobacco Manufacturing",
        description: "At Djarum, we view our people as the foundation of our success.",
        location: "Kudus",
        total_employee: 13000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Bank BTPN Tbk",
        field: "Banking",
        description: "Empowering Millions for Greater Significance",
        location: "Bogor",
        total_employee: 6000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "CIMB Niaga",
        field: "Banking",
        description: "Lampaui Batas Dirimu dan Berani #KejarMimpi",
        location: "Cirebon",
        total_employee: 8700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT HM Sampoerna Tbk.",
        field: "Tobacco Manufacturing",
        description: "Established in 1913, PT Hanjaya Mandala Sampoerna Tbk. (Sampoerna) has been playing a significant part in the tobacco industry for more than a century.",
        location: "Malang",
        total_employee: 15000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Indofood Sukses Makmur Tbk",
        field: "Manufacturing",
        description: "Progressively transformed to become a Total Food Solutions company with operations in all stages of food manufacturing from the production of raw materials and their processing through to consumer products in the market.",
        location: "Madiun",
        total_employee: 10500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Bank Danamon Indonesia, Tbk.",
        field: "Banking",
        description: "berdiri sejak 1956, per 30 Juni 2021 mengelola total aset konsolidasi sebesar Rp 194 triliun bersama anak perusahaannya, yaitu PT Adira Dinamika Multi Finance Tbk. (Adira Finance).",
        location: "Tegal",
        total_employee: 7700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT. Pegadaian",
        field: "Financial Services",
        description: "Pegadaian Semakin Muda(h)",
        location: "Sukabumi",
        total_employee: 7000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PT Frisian Flag Indonesia",
        field: "Manufacturing",
        description: "We help you to unleash your natural potential and remain authentic as you develop your career. #UnleashYourNature",
        location: "Banjar",
        total_employee: 24000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Samsung Electronics",
        field: "Computers and Electronics Manufacturing",
        description: "Computers and Electronics Manufacturing",
        location: "Pangandaran",
        total_employee: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "LG Electronics",
        field: "Computers and Electronics Manufacturing",
        description: "A Better Life For All",
        location: "Bali",
        total_employee: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Xiaomi Technology",
        field: "Technology, Information and Internet",
        description: "Xiaomi is a consumer electronics and smart manufacturing company with smartphones and smart hardware connected by an IoT platform at its core.",
        location: "Jambi",
        total_employee: 15000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "WARDAH",
        field: "Personal Care Product Manufacturing",
        description: "Wardah is a beauty brand that cares and understands the wish of every women to always feel calm and comfortable with their look.",
        location: "Bali",
        total_employee: 5500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "L'Oréal",
        field: "Personal Care Product Manufacturing",
        description: "Leading in beauty and pioneering the world of beauty tech, present in 150 countries",
        location: "Bali",
        total_employee: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Emina",
        field: "Personal Care Product Manufacturing",
        description: "Setiap orang membutuhkan sahabat dalam hidup mereka, begitu pula kulit Anda.",
        location: "Bali",
        total_employee: 4500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Make Over",
        field: "Personal Care Product Manufacturing",
        description: "Make Over Cosmetics is a professional cosmetics with complete range of colors, textures, and functions for each product categories.",
        location: "Surabaya",
        total_employee: 6000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Coca-Cola Company",
        field: "Food and Beverage Services",
        description: "The Coca-Cola Company (NYSE: KO) is a total beverage company, offering over 500 brands in more than 200 countries and territories.",
        location: "Bandung",
        total_employee: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
