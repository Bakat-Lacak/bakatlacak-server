'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfile.belongsTo(models.User,{foreignKey: "user_id"})
    }
  }
  UserProfile.init({
    user_id: DataTypes.INTEGER,
    resume: DataTypes.STRING,
    portofolio: DataTypes.STRING,
    about_me: DataTypes.STRING,
    salary_expectation: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};