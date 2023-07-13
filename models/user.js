"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.Experience, { foreignKey: "user_id" });
      User.hasMany(models.JobApplication, { foreignKey: "user_id" });
      User.hasOne(models.UserProfile, { foreignKey: "user_id" });
      User.belongsToMany(models.JobListing, { foreignKey: "user_id", through: models.JobApplication });
      User.belongsToMany(models.Education, { foreignKey: "user_id", through: models.UserEducation });
      User.belongsToMany(models.Skill, { foreignKey: "user_id", through: models.UserSkill });
      User.hasMany(models.UserCompany, { foreignKey: "user_id" });
      User.belongsToMany(models.CompanyProfile, { foreignKey: "user_id", through: models.UserCompany });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      first_name: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: true,
          notEmpty: true,
        },
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: true,
          notEmpty: true,
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      birth_date: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isIn: [["male", "female"]],
        },
      },
      photo: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: false,
          isIn: [["user", "admin", "recruiter"]],
        },
      },
      address: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          let plainPassword = user.password;
          const hashedPassword = bcrypt.hashSync(plainPassword, salt);
          user.password = hashedPassword;
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
