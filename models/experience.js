"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Experience.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Experience.init(
    {
      user_id: DataTypes.INTEGER,
      company: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      department: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      position: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      industry: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      salary: DataTypes.INTEGER,
      start_date: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: true,
        },
      },
      end_date: {
        type: DataTypes.DATE,
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
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Experience",
    }
  );
  return Experience;
};
