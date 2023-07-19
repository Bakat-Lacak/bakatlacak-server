'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CompanyProfile.hasMany(models.JobListing,{foreignKey: "company_id"})
      CompanyProfile.hasMany(models.UserCompany,{foreignKey: "company_id"})
      CompanyProfile.belongsToMany(models.User,{foreignKey: "company_id", through: models.UserCompany})
    }
  }
  CompanyProfile.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      field: {
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
      location: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      photo: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      total_employee: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CompanyProfile",
    }
  );
  return CompanyProfile;
};