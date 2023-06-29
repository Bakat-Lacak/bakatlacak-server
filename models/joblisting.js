"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobListing.hasMany(models.JobSkill, { foreignKey: "job_listing_id" });
      JobListing.hasMany(models.JobType, { foreignKey: "job_listing_id" });
      JobListing.hasMany(models.JobApplication, {
        foreignKey: "job_listing_id",
      });
      // JobListing.belongsTo(models.CompanyProfile,{foreignKey: "job_listing_id"})
      JobListing.belongsTo(models.CompanyProfile, { foreignKey: "company_id" });
      JobListing.belongsToMany(models.User, {
        foreignKey: "job_listing_id",
        through: models.JobApplication,
      });
      JobListing.belongsToMany(models.Type, {
        foreignKey: "job_listing_id",
        through: models.JobType,
      });
      JobListing.belongsToMany(models.Skill, {
        foreignKey: "job_listing_id",
        through: models.JobSkill
      })
    }
  }
  JobListing.init(
    {
      user_id: DataTypes.INTEGER,
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      company_id: DataTypes.INTEGER,
      location: DataTypes.STRING,
      salary_start: DataTypes.INTEGER,
      salary_end: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "JobListing",
    }
  );
  return JobListing;
};
