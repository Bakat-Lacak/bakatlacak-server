"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserEducation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserEducation.belongsTo(models.Education, { foreignKey: "education_id" });
      UserEducation.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  UserEducation.init(
    {
      user_id: DataTypes.INTEGER,
      education_id: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      graduation_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserEducation",
    }
  );
  return UserEducation;
};
