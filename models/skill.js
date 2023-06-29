'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Skill.hasMany(models.JobSkill,{foreignKey: "skill_id"})
      Skill.belongsToMany(models.JobListing,{foreignKey: "skill_id", through: models.JobSkill})
      Skill.belongsToMany(models.User,{foreignKey: "skill_id", through: models.UserSkill})

    }
  }
  Skill.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    level: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isIn: [['beginner', 'advance', 'expert']]
      }
    }
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};