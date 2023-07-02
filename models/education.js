"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Education.belongsToMany(models.User, { foreignKey: "education_id", through: models.UserEducation });
      Education.hasMany(models.UserEducation, { foreignKey: "education_id" });
    }
  }
  Education.init(
    {
      school_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      major: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Education",
    }
  );
  return Education;
};
