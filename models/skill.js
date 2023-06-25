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
      Skill.belongsTo(models.User,{foreignKey: "user_id"})
      Skill.belongsToMany(models.JobListing,{foreignKey: "skill_id", through: models.JobSkill})

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
    },
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};