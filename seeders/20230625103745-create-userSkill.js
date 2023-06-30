'use strict';

const { User, Skill } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // const userAccount = await User.findOne({where: {
    //   email: "user@mail.com"
    // }})

    // const userSkills = await Skill.findAll({where:{
    //   id: [2, 4, 9, 10, 15]
    // }})

    // const userSkillsRecord = userSkills.map( skill => ({
    //   user_id: userAccount.id,
    //   skill_id: skill.id,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }))

    // await queryInterface.bulkInsert('UserSkills', userSkillsRecord);
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
    await queryInterface.bulkDelete('UserSkills', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
