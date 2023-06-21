'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job_application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job_application.init({
    user_id: DataTypes.INTEGER,
    joblisting_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    resume: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job_application',
  });
  return Job_application;
};