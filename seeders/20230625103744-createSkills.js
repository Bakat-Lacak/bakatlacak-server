'use strict';

const { User } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let skills = await queryInterface.bulkInsert('Skills',[
      {
        name: 'Database', // 0
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML', // 1
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS', // 2
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React', // 3
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Golang', // 4
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Managerial', // 5
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Design', // 6
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Python', // 7
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Figma', // 8
        level: 'Advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Algorithm', // 9
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sketch', // 10
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Public Speaking', // 11
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Communication', // 12
        level: 'beginner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leadership', // 13
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fashionable', // 14
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sales', // 15
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Market Trend', // 16
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Organization', // 17
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marketing', // 18
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Product Knowledge', // 19
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Problem Solving', // 20
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grooming', // 21
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Driving', // 22
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Good physical ability', // 23
        level: 'advance',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {returning: true})
// 0 1 2 3 9 12
    skills = [skills[0],skills[1],skills[2],skills[3],skills[9],skills[12]]

    const userAccount = await User.findOne({where: {
      email: "user@mail.com"
    }})

    const userSkillsRecord = skills.map((skill) => (
      {
        user_id: userAccount.id,
        skill_id: skill.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ))

    await queryInterface.bulkInsert('UserSkills', userSkillsRecord)
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
    await queryInterface.bulkDelete('Skills', null, {});
    await queryInterface.bulkDelete('UserSkills', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
