'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobSkill.belongsTo(models.Skill,{foreignKey: "skill_id"})
      JobSkill.belongsTo(models.JobListing,{foreignKey: "job_listing_id"})
    }
  }
  JobSkill.init({
    job_listing_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobSkill',
  });
  return JobSkill;
};